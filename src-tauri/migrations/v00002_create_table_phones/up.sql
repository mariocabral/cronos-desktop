-- Your SQL goes here
CREATE TABLE "profesionals_phones" (
	"id"	VARCHAR(36) NOT NULL UNIQUE,
	"profesional_id"	VARCHAR(36) NOT NULL UNIQUE,
	"phone"	VARCHAR(50) NOT NULL,
	"enabled"	BOOLEAN NOT NULL DEFAULT true,
	"created_at"	TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at"	TIMESTAMP,
    FOREIGN KEY("profesional_id") REFERENCES "profesionals"("profesional_id"),
	PRIMARY KEY("id")
);