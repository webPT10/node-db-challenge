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



module.exports = {
    findById,
    add,
    find
}