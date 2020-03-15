const express = require("express");

const Resource = require("./resource-model");
const db = require("../data/config")

const router = express.Router({
  mergeParams: true
});

router.get("/", (req, res) => {
  Resource.find()
    .then(resource => {
      res.json(resource);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Failed to return Resources. Good-bye." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Resource.getProjectsByResource(id)
    .then(resource => {
      res.json(resource);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Failed to return Resources. Good-bye." });
    });

  // projects_that_use: Resource.getProjectsByResource(id),
});

router.get("/:id/resources", async (req, res, next) => {
  try {
    const resources = await db("projects_resources")
      .join("projects", "projects.id", "projects_resources.projects_id")
      .join("resources", "resources.id", "projects_resources.resources_id")
      .where("projects.id", req.params.id)
      .select("projects.name as projects_name", "resources.*" );

    res.json(resources);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const projectId = req.body.project_id
  const newResource = {
    name: req.body.name,
    description: req.body.description
  }
  try {
    await Resource.add(newResource, projectId)
    res.status(201).json()
  } catch(error){
    next(error)
  }

  // Resource.add(newResource)
  //   .then(resource => {
  //     res.status(201).json(resource);
  //   })
    // .catch(error => {
    //   res
    //     .status(500)
    //     .json({ message: "Failed to create new Resource. Good-luck." });
    // });
});

module.exports = router;
