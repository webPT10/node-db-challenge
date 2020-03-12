
exports.seed = async function(knex) {
  await knex("tasks").insert([
    { description: "Go outside", notes: "Open the door, walk-outside.", projects_id: 1, completed: false },
    { description: "Sit down in stool.", notes: "Sit in stool.", projects_id: 2, completed: false },
    { description: "Pull out knife.", notes: "Remove knife from carry case.", projects_id: 2, completed: false },
    { description: "Pickup block of wood", projects_id: 2, completed: false },
    { description: "Begin to widdle.", notes: "You will now be widdling.", projects_id: 2, completed: false },
    { description: "Pick up the shovel.", notes: "Its still in the garden.",projects_id: 1, completed: false },
    { description: "Dig a hole in the ground.", notes: "About 1.5ft deep.",projects_id: 1, completed: false },
    { description: "Follow directions on tree planting seed kit.",projects_id: 1, completed: false },  
])
};
