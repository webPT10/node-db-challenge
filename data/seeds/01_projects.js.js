
exports.seed = async function(knex) {
  await knex("projects").insert([
    { name: "Plant Tree", description: "Plant a tree in backyard.", completed: false },
    { name: "Widdle", description: "Widdle with wood.", completed: false },
])
};
