exports.up = function (knex) {
  return knex.schema.createTable("product", function (table) {
    table.increments("id").primary();
    table.integer("category_id").unsigned().notNullable();
    table
      .foreign("category_id")
      .references("id")
      .inTable("product_category")
      .onDelete("CASCADE");
    table.string("name", 250).notNullable();
    table.integer("price").notNullable();
    table.integer("quantity").notNullable();
    table.string("text", 500);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("products");
};
