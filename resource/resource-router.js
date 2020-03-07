const express = require("express");

const Resource = require("./resource-model");

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

router.post("/", (req, res) => {
  const resourceData = req.body;

  Resource.add(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Failed to create new Resource. Good-luck." });
    });
});

module.exports = router;