const fs = require("fs");
const path = require("path");
const middlewareFunc = require("../middleware/middleware.js");

// This function handles the home route and serves the index.html file.
// If the file is not found, it serves a 404.html file.
// if the 404.html file is also not found, it returns a 500 Internal Server Error.
const homeRoute = async (req, res) => {
  try {
    const data = await fs.promises.readFile(
      path.join(__dirname, "..", "public", "index.html")
    );
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } catch (err) {
    try {
      const data404 = await fs.promises.readFile(
        path.join(__dirname, "..", "public", "404.html")
      );
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(data404);
    } catch (err404) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  }
};

const aboutRoute = async (req, res) => {
  try {
    const data = await fs.promises.readFile(
      path.join(__dirname, "..", "public", "about.html")
    );
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } catch (err) {
    try {
      const data404 = await fs.promises.readFile(
        path.join(__dirname, "..", "public", "404.html")
      );
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(data404);
    } catch (err404) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  }
};

const apiRoute = async (req, res) => {
  const users = [
    { name: "John Doe", age: 30 },
    { name: "Jane Smith", age: 25 },
    { name: "Alice Johnson", age: 28 },
  ];

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(users));
};

const dynamicPathHandling = async (req, res) => {
  middlewareFunc(req, res, () => {});

  const filepath = path.join(
    __dirname,
    "..",
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  const fileExt = path.extname(filepath);
  let contentType = "text/html";

  switch (fileExt) {
    case ".html":
      contentType = "text/html";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
  }

  if (!fileExt) {
    const users = [
      { name: "John Doe", age: 30 },
      { name: "Jane Smith", age: 25 },
      { name: "Alice Johnson", age: 28 },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users))
  } else {
    try {
      const data = await fs.promises.readFile(filepath);
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    } catch (err) {
      if (err.code === "ENOENT") {
        try {
          const data404 = await fs.promises.readFile(
            path.join(__dirname, "..", "public", "404.html")
          );
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(data404);
        } catch (err404) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
        }
      }
    }
  }
};

module.exports = {
  homeRoute,
  aboutRoute,
  apiRoute,
  dynamicPathHandling,
};
