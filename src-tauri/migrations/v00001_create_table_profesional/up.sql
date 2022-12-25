-- Your SQL goes here
CREATE TABLE "profesionals" (
	"id"	VARCHAR(36) NOT NULL UNIQUE,
	"profesional_id"	VARCHAR(36) NOT NULL UNIQUE,
	"first_name"	VARCHAR(50) NOT NULL,
	"last_name"	VARCHAR(50) NOT NULL,
	"degree"	VARCHAR(50) NOT NULL,
	"licence"	VARCHAR(50) NOT NULL,
	"email"	VARCHAR(50) NOT NULL,
	"enabled"	BOOLEAN NOT NULL DEFAULT true,
	"created_at"	TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at"	TIMESTAMP,
	PRIMARY KEY("id")
);
