import knex from "../db.js";

export const insertUser = async ({ first_name, last_name, age }) => {
  const [user] = await knex("users")
    .insert({
      first_name,
      last_name,
      age,
      create_at: knex.fn.now(),
    })
    .returning("*");
  return user;
};
