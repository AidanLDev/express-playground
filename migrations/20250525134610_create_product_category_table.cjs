
exports.up = function(knex) {
 return knex.schema.createTable("product_category", function(table) {
  table.increments("id").primary();
  table.string("name", 100).notNullable();
  table.string("description", 255);
  table.timestamp("created_at").defaultTo(knex.fn.now());
  table.timestamp("updated_at").defaultTo(knex.fn.now());
 }) 
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("product_category");
};
