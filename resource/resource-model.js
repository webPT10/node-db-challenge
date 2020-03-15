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
async function add(newResource, projectId) {
    const [ resourceID ] = await db("resources")
      .insert(newResource) // returns array of 

      await db("projects_resources")
        .insert({
          projects_id: projectId,
          resources_id: resourceID
        })
  }
  // function addResourceToJoinTable(resource) {
  //     db("projects_resources")
  //       .insert(resource)
  //     // .then(ids => {
  //     //   return findById(ids);
  //     // });
  // }

// retrieve a list of resources
function find() {
    return db("resources");
  }

function getProjectsByResource(id){
  return db("resources")
    .join("projects_resources", "resources.id", "=", "projects_resources.resources_id")
    .select("resources.*")
    .where("resource.id", id)
}

module.exports = {
    findById,
    add, 
    find,
    getProjectsByResource,
    // addResourceToJoinTable
}