exports.up = function (knex) {
  return knex.schema.createTable("orders", function (table) {
    table.increments("id").primary();
    table.integer("product_id").unsigned().notNullable();
    table
      .foreign("product_id")
      .references("id")
      .inTable("product")
      .onDelete("CASCADE");
    table.integer("user_id").unsigned().notNullable();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.integer("quantity").notNullable().defaultTo(1);
    table
      .enu("status", ["pending", "shipped", "delivered", "cancelled"], {
        useNative: true,
        enumName: "order_status",
      })
      .notNullable()
      .defaultTo("pending");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("orders");
};
