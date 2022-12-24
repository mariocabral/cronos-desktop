use diesel_migrations::{embed_migrations, EmbeddedMigrations, MigrationHarness};
use crate::repository::db_connection::establish_connection;
use log::info;


pub fn apply_migrations() {
  info!("Apply Migrations...");
  const MIGRATIONS: EmbeddedMigrations = embed_migrations!("./migrations");
  let mut connection = establish_connection();
  connection
    .run_pending_migrations(MIGRATIONS)
    .expect("Error migrating");
}
