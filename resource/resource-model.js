const db = require('../data/config')

// find by id
function findById(id) {
    return db("resources")
      .where({ "resources.id": id })
      .first()
  }
  
  // add resources
  // INSERT INTO resources(name)
  // VALUES ("hammer");
  function add(resource) {
    return db("resources")
      .insert(resource)
      .then(ids => {
        return findById(ids);
      });
  }

// retrieve a list of resources
function find() {
    return db("resources");
  }

module.exports = {
    findById,
    add, 
    find
}