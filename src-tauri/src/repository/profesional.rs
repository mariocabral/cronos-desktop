use crate::repository::db_connection::establish_connection;
use crate::repository::models::schema;
use crate::repository::models::profesional::{ProfesionalsEntity, ProfesionalsPhonesEntity};
use crate::diesel::RunQueryDsl;
use log::info;

pub fn save_profesional(profesional: &ProfesionalsEntity, phones: &Vec<ProfesionalsPhonesEntity>){
    let mut connection = establish_connection();
    
    let result = diesel::insert_or_ignore_into(schema::profesionals::dsl::profesionals)
    .values(profesional)
    .execute(&mut connection)
    .expect("Expect add profesinoals");
    
    info!("Total profesional stored {result}");

    let result2 = diesel::insert_or_ignore_into(schema::profesionals_phones::dsl::profesionals_phones)
    .values(phones)
    .execute(&mut connection)
    .expect("Expect add profescionals_phones");
    info!("Total profesional phones stored {result2}");
}

