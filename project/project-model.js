const db = require('../data/config')

// find by id
function findById(id) {
    return db("projects")
      .where({ "projects.id": id })
      .first()
  }
  
// add projects
// INSERT INTO projects(name)
// VALUES ("Put up photo.");
function add(project){
    return db("projects")
        .insert(project)
        .then(ids => {
            return findById(ids)
        })
}

// retrieve a list of projects
function find(){
    return db("projects")
}

module.exports = {
    findById,
    add,
    find,
}