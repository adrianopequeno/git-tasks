export function up(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("login").notNull().unique();
    table.string("avatar_url").notNull();
  });
}

export function down(knex) {
  return knex.schema.dropTable("users");
}
