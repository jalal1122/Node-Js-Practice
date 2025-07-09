const http = require("http");

// create a simple HTTP server
http
  .createServer((req, res) => {
    res.write("Hello, World!");
    res.end();
  })
  .listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
