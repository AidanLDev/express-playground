import knex from "../db.js";

export const insertUser = async ({ first_name, last_name, age }) => {
  const [user] = await knex("users")
    .insert({
      first_name,
      last_name,
      age,
      created_at: knex.fn.now(),
    })
    .returning("*");
  return user;
};

export const selectUsers = async () => {
  return [await knex("users").select("*")];
};
