const db = require('../data/config')

// find by id
function findById(id) {
    return db("tasks")
      // .join("projects", "tasks.projects_id", "=", "projects.id")
      // .select("tasks.*", "projects.projects_name", "projects.description")
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
  function find(){
    return db("tasks")
    .select("projects.name as project_name", "projects.description as project_description","tasks.id as task_id", "tasks.description as task_description", "tasks.notes as task_notes")
    .join("projects","tasks.projects_id", "=", "projects.id"  )
    // .where({"tasks.project_id": id})
  }


module.exports = {
    findById,
    add,
    find
}