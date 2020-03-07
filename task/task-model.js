const db = require('../data/config')

// find by id
function findById(id) {
    return db("tasks")
      .where({ "tasks.id": id })
      .first();
  }
  
  // add tasks
  // INSERT INTO tasks(name)
  // VALUES ("Put up photo.");
  function add(task) {
    return db("tasks")
      .insert(task)
      .then(ids => {
        return findById(ids);
      });
  }

// retrieving a list of tasks
//  list of tasks should include the task name and task description.
// SELECT p.name, p.description, t.description
// FROM tasks as t
// JOIN projects as p
// on t.project_id = p.id;
  function find(id){
    return db("tasks")
    .select("p.name", "p.description", "t.description")
    .join("projects", "t.project_id", "=", "p.id")
    .where("tasks.project_id", id);
  }


module.exports = {
    findById,
    add,
    find
}