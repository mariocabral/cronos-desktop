use tauri::{command};
use crate::api::models::profesional::{Profesionals};
use crate::api::parsers::profesional::{convert_to_profesional_entity, convert_to_profesionals_phones_entity, convert_to_profesional};
use crate::repository::profesional::save_profesional;
use log::info;

#[command]
pub async fn create_profesional(profesional: Profesionals) -> Option<Profesionals> {
  info!("Create a new profesional");
  let profesional_entity = convert_to_profesional_entity(&profesional);
  let phones_entity = convert_to_profesionals_phones_entity(profesional.phones, &profesional_entity.id);
  
  info!("Save new profesional");
  save_profesional(&profesional_entity, &phones_entity);
  info!("Profesional created");
  return Some(convert_to_profesional(&profesional_entity, &phones_entity));
}