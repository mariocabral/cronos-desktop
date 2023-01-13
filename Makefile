

run:
	yarn tauri dev

schema:
	diesel print-schema --database-url=/home/${USER}/.cronos-desktop/cronos.db

migration:
	diesel migration --migration-dir ./src-tauri/migrations/  generate $1
