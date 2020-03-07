const express = require("express")

const Task = require("./task-model")

const router = express.Router({
    mergeParams:true
})

router.get("/", (req, res) => {

})

router.post("/", (req, res) => {

})

module.exports = router;