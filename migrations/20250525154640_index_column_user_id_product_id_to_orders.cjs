exports.up = function (knex) {
  return knex.schema.alterTable("orders", function (table) {
    table.index(["user_id", "product_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("orders", function (table) {
    table.dropIndex(["user_id", "product_id"]);
  });
};
