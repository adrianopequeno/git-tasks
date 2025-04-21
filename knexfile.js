export const client = "pg";
export const connection = {
  database: "gittasks",
  user: "admin",
  password: "admin",
};
export const pool = {
  min: 2,
  max: 10,
};
export const migrations = {
  tableName: "knex_migrations",
  directory: "./src/db/migrations",
};
