use crate::api::models::profesional::{Profesionals, ProfesionalsPhones};
use crate::repository::models::profesional::{ProfesionalsEntity, ProfesionalsPhonesEntity};
use uuid::Uuid;
use chrono::{Local};
use chrono::NaiveDateTime;

pub fn convert_to_profesional_entity (profesional: &Profesionals) -> ProfesionalsEntity {
    let profesional_uuid = Uuid::new_v4().hyphenated().to_string();
    return ProfesionalsEntity{
      id: profesional_uuid.clone(),
      profesional_id: profesional_uuid.clone(),
      first_name: profesional.first_name.clone(),
      last_name: profesional.last_name.clone(),
      full_name: profesional.full_name.clone(),
      degree: profesional.degree.clone(),
      licence: profesional.licence.clone(),
      email: profesional.email.clone(),
      enabled: profesional.enabled,
      created_at: Local::now().naive_utc(),
      updated_at: Local::now().naive_utc(),
    };
}


pub fn convert_to_profesionals_phones_entity (phones: Vec<ProfesionalsPhones>, profesional_uuid: &String) -> Vec<ProfesionalsPhonesEntity> {
    let profesional_phones: Vec<ProfesionalsPhonesEntity> = phones
    .iter()
    .map(|p| ProfesionalsPhonesEntity{
      id: Uuid::new_v4().hyphenated().to_string(),
      profesional_id: profesional_uuid.clone(),
      phone: p.phone.clone(),
      enabled: true,
      created_at: Local::now().naive_utc(),
      updated_at: Local::now().naive_utc(),
    })
    .collect();
    return profesional_phones;
}

fn parse_time_to_string(time : &NaiveDateTime) -> Option<String> {
    return Some(time.format("%Y-%m-%d %H:%M:%S").to_string());
}

pub fn convert_to_profesional(profesional: &ProfesionalsEntity, phones: &Vec<ProfesionalsPhonesEntity>) -> Profesionals {
    return Profesionals{
        id: Some(profesional.id.clone()),
        profesional_id: Some(profesional.profesional_id.clone()),
        first_name: profesional.first_name.clone(),
        last_name: profesional.last_name.clone(),
        full_name: profesional.full_name.clone(),
        degree: profesional.degree.clone(),
        licence: profesional.licence.clone(),
        email: profesional.email.clone(),
        enabled: profesional.enabled,
        created_at: parse_time_to_string(&profesional.created_at),
        updated_at: parse_time_to_string(&profesional.updated_at),
        phones: phones.iter()
            .map(|p| ProfesionalsPhones { 
                id: Some(p.id.clone()), 
                profesional_id: Some(p.profesional_id.clone()), 
                phone: p.phone.clone(), 
                enabled: p.enabled, 
                created_at: parse_time_to_string(&p.created_at), 
                updated_at: parse_time_to_string(&p.updated_at) })
            .collect()
    };
}