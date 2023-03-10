use diesel::prelude::*;
use std::path;
use dotenv::dotenv;
use std::env;
use log::{info, warn, error};
use std::fs;


pub fn establish_connection() -> SqliteConnection {
    dotenv().ok();
  
    let _env = env::var("CRONOS_ENV");
  
    match _env {
      Ok(_env) => {
        let database_url = &env::var("DATABASE_URL").unwrap();
        info!("Establish connection with {database_url} value from env variable.");
        SqliteConnection::establish(&database_url)
          .expect(&format!("Error connecting to {}", &database_url))
      }
      Err(_) => {
        warn!("no CRONOS_ENV");
  
        let create_dir = fs::create_dir_all(path::Path::new(&tauri::api::path::home_dir().unwrap()).join(".cronos-desktop"));
        match create_dir {
          Ok(_) => {
            info!("Create app directory succesfully");
          }
          Err(_) => {
            error!("Fail create app directory");
          }
        }

        let database_url = path::Path::new(&tauri::api::path::home_dir().unwrap())
          .join(".cronos-desktop")
          .join("cronos.db");
  
        let database_url = database_url.to_str().clone().unwrap();
        info!("Establish connection with {database_url} value by default.");
        SqliteConnection::establish(&database_url)
          .expect(&format!("Error connecting to {}", &database_url))
      }
    }
  }