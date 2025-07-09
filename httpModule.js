const http = require("http");

// create a simple HTTP server
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/Json" });
    res.write(
      JSON.stringify({
        name: "anas",
        age: 20,
      })
    );
    res.end();
  })
  .listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
