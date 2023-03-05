use serde::{Serialize, Deserialize};
use ts_rs::TS;

#[derive(Debug, Serialize, Deserialize, Clone, TS)]
#[serde(rename_all = "camelCase")]
#[ts(export, export_to = "../src/bindings/")]
pub struct CustomersPhones {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<String>,
    #[serde(rename = "customer_id", skip_serializing_if = "Option::is_none")]
    pub customer_id: Option<String>,
    pub phone: String,
    pub enabled: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub created_at: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub updated_at: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, Clone, TS)]
#[serde(rename_all = "camelCase")]
#[ts(export, export_to = "../src/bindings/")]
pub struct Customers {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub customer_id: Option<String>,
    pub first_name: String,
    pub last_name: String,
    pub full_name: String,
    pub email: String,
    pub enabled: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub created_at: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub updated_at: Option<String>,
    pub phones: Vec<CustomersPhones>
}
