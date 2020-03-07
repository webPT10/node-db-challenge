
exports.seed = async function(knex) {
    await knex("resources").insert([
      { name: "knife", description: "4'inch blade, very sharp." },
      { name: "stool", description: "Gardening Stool." },
      { name: "shovel", description: "6 in. W x 47 in. L Drain Spade." },
      { name: "seed grow kit", description: "Giant Sequoia." },
      { name: "wood", description: "A block of wood." },
  ])
};
