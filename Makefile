
diesel-install:
	cargo install diesel_cli --no-default-features --features sqlite

run:
	yarn tauri dev

schema:
	diesel print-schema --database-url=/home/${USER}/.cronos-desktop/cronos.db

migration:
	diesel migration --migration-dir ./src-tauri/migrations/  generate $1

generate-binding:
	cd src-tauri; cargo test