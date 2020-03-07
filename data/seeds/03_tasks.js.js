
exports.seed = async function(knex) {
  await knex("tasks").insert([
    { description: "Go outside", notes: "Open the door, walk-outside.", completed: false },
    { description: "Sit down in stool.", notes: "Sit in stool.", completed: false },
    { description: "Pull out knife.", notes: "Remove knife from carry case.", completed: false },
    { description: "Pickup block of wood", completed: false },
    { description: "Begin to widdle.", notes: "You will now be widdling.", completed: false },
    { description: "Pick up the shovel.", notes: "Its still in the garden.", completed: false },
    { description: "Dig a hole in the ground.", notes: "About 1.5ft deep.", completed: false },
    { description: "Follow directions on tree planting seed kit.", completed: false },    
])
};
