const express = require("express")

const Task = require("./task-model")

const router = express.Router({
    mergeParams:true
})

router.get("/", (req, res) => {

  Task.find()
    .then(task => {
      res.json(task);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to return Tasks. Good-bye." });
    });
})

router.post("/", (req, res) => {
    const taskData = req.body;

    Task.add(taskData)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: "Failed to create new Task. Good-luck." });
      });
})

module.exports = router;