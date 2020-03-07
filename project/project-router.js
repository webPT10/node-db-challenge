const express = require("express")

const Project = require("./project-model")

const router = express.Router({
    mergeParams:true,
})

router.get("/", (req, res) => {

})

router.post("/", (req, res) => {

})

module.exports = router;