use super::schema::{profesionals, profesionals_phones};
use chrono::NaiveDateTime;


#[derive(Debug, Clone, Insertable)]
#[diesel(table_name = profesionals)]
pub struct ProfesionalsEntity {
    pub id: String,
    pub profesional_id: String,
    pub first_name: String,
    pub last_name: String,
    pub degree: String,
    pub licence: String,
    pub email: String,
    pub enabled: bool,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Identifiable, Queryable, Associations, PartialEq, Debug, Insertable)]
#[diesel(belongs_to(ProfesionalsEntity, foreign_key = profesional_id))]
#[diesel(table_name = profesionals_phones)]
pub struct ProfesionalsPhonesEntity {
    pub id: String,
    pub profesional_id: String,
    pub phone: String,
    pub enabled: bool,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}