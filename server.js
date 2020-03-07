const express = require("express");
const welcomeRouter = require("./welcome/welcome-router");
const resourceRouter = require('./resource/resource-router')
const projectRouter = require("./project/project-router")

const server = express();
const port = process.env.PORT || 5050;

server.use(express.json());

server.use("/", welcomeRouter);
server.use("/api/resource", resourceRouter)
server.use("/api/project", projectRouter)

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong. Good-bye."
    });
  });

  server.listen(port, () => {
    console.log(`Server galloping at http://localhost:${port}`);
  });