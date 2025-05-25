import knex from "../db.js";

export async function getUserOrders(userId) {
  return await knex("orders as o")
    .join("users as u", "o.user_id", "u.id")
    .join("product as p", "o.product_id", "p.id")
    .select(
      knex.raw(`CONCAT(u.first_name, ' ', u.last_name) as "Full Name"`),
      "p.name as Product",
      "p.price as Price",
      "o.quantity as Quantity",
      "o.status as Status"
    )
    .where("u.id", userId);
}
