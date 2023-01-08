// @generated automatically by Diesel CLI.

diesel::table! {
    profesionals (id) {
        id -> Text,
        profesional_id -> Text,
        first_name -> Text,
        last_name -> Text,
        degree -> Text,
        licence -> Text,
        email -> Text,
        enabled -> Bool,
        created_at -> Timestamp,
        updated_at -> Nullable<Timestamp>,
    }
}

diesel::table! {
    profesionals_phones (id) {
        id -> Text,
        profesional_id -> Text,
        phone -> Text,
        enabled -> Bool,
        created_at -> Timestamp,
        updated_at -> Nullable<Timestamp>,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    profesionals,
    profesionals_phones,
);