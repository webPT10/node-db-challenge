const express = require("express")

const Project = require("./project-model")

const router = express.Router({
    mergeParams:true,
})

router.get("/", (req, res) => {
    Project.find()
    .then(project => {
      res.json(project);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Failed to return Projects. Good-bye." });
    });
})

router.post("/", (req, res) => {
    const projectData = req.body;
  
    Project.add(projectData)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: "Failed to create new Project. Good-luck." });
      });
})

module.exports = router;