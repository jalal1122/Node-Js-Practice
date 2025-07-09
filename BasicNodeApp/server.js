const http = require("http");
const path = require("path");
const fs = require("fs");

const Port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
        if (err) {
          fs.readFile(
            path.join(__dirname, "public", "404.html"),
            (err404, data404) => {
              if (err404) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                return;
              }
              res.writeHead(404, { "Content-Type": "text/html" });
              res.end(data404);
            }
          );
        }
        res.end(data);
      });
    }
    if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
        if (err) {
          fs.readFile(
            path.join(__dirname, "public", "404.html"),
            (err404, data404) => {
              if (err404) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                return;
              }
              res.writeHead(404, { "Content-Type": "text/html" });
              res.end(data404);
            }
          );
        }
        res.end(data);
      });
    }

    if (req.url === "/api/users") {
      const users = [
        { name: "John Doe", age: 30 },
        { name: "Jane Smith", age: 25 },
        { name: "Alice Johnson", age: 28 },
      ];

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
    }

  // Dynamic Path Handling
  const filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  console.log(`Requested file path: ${filePath}`);

  //   for File Extension Handling
  const extName = path.extname(filePath);

  //   Content Type Handling
  let contentType = "text/html";

  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".gif":
      contentType = "image/gif";
      break;
    default:
      contentType = "text/html";
  }

  //   File Reading and Response Handling
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err404, data404) => {
            if (err404) {
              res.writeHead(500, { "Content-Type": "text/plain" });
              res.end("Internal Server Error");
              return;
            }
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(data404);
          }
        );
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
