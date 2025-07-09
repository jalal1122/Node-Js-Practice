const http = require("http");
const path = require("path");
const fs = require("fs");
const {
  homeRoute,
  aboutRoute,
  apiRoute,
  dynamicPathHandling,
} = require("./controllers/dataController.js");

const Port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    homeRoute(req, res);
  }

  if (req.url === "/about") {
    aboutRoute(req, res);
  }

  if (req.url === "/api/users") {
    apiRoute(req, res);
  }

  dynamicPathHandling(req, res);
});

server.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
