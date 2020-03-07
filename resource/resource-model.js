const db = require('../data/config')


// retrieve a list of resources
function find() {
    return db("resources");
  }

module.exports = {
    find,
}