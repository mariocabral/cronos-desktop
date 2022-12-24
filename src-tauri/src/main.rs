#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[macro_use]
extern crate log;
extern crate diesel;
extern crate diesel_migrations;
extern crate dotenv;

use tauri_plugin_log::{fern::colors::ColoredLevelConfig, LogTarget, LoggerBuilder};
mod repository;
use repository::migration::apply_migrations;

fn main() {

  let targets = [LogTarget::LogDir, LogTarget::Stdout, LogTarget::Webview];
  let colors = ColoredLevelConfig::default();

  tauri::Builder::default()
    .setup(|app| {
      apply_migrations();
      Ok(())
    })
    .plugin(
      LoggerBuilder::new()
        .with_colors(colors)
        .targets(targets)
        .build(),
    )
    .run(tauri::generate_context!())
    .expect("error while running cronos-desktop application");
}
