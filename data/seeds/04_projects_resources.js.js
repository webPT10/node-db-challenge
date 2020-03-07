
exports.seed = async function(knex) {
    await knex("projects_resources").insert([
      { projects_id: 1, resources_id: 1 },
      { projects_id: 1, resources_id: 3 },
      { projects_id: 1, resources_id: 4 },
      { projects_id: 2, resources_id: 1 },
      { projects_id: 2, resources_id: 2 },
      { projects_id: 2, resources_id: 5 }
  ])
};
