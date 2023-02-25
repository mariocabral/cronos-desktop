use serde::{Serialize, Deserialize};
use ts_rs::TS;
use chrono::NaiveDateTime;

#[derive(Debug, Serialize, Deserialize, Clone, TS)]
#[serde(rename_all = "camelCase")]
#[ts(export, export_to = "../src/bindings/")]
pub struct Appointement {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub appointment_id: Option<String>,
    pub title: Option<String>,
    pub profesional_id: Option<String>,
    pub profesional_name: Option<String>,
    pub customer_id: Option<String>,
    pub customer_name: Option<String>,
    pub room_id: Option<String>,
    pub room_name: Option<String>,
    pub healtcare_id: Option<String>,
    pub healtcare_name: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub notes: Option<String>,
    #[ts(type = "Date")]
    pub appointment_start: NaiveDateTime,
    #[ts(type = "Date")]
    pub appointment_end: NaiveDateTime,
    
    pub enabled: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub created_at: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub updated_at: Option<String>
}

