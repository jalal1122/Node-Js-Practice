const fs = require("fs");
const path = require("path");

// Create a new directory
fs.mkdir("newFolder", {}, (err) => {
  if (err) throw err;
  console.log("Directory created successfully!");
});

// Create a new file and write to it
fs.writeFile(path.join("newFolder", "example.txt"), "Hello boyi!", (err) => {
  if (err) throw err;
  console.log("File created and written successfully!");
});

// Append data to an existing file
fs.appendFile(
  path.join("newFolder", "example.txt"),
  "\nHello again!",
  (err) => {
    if (err) throw err;
    console.log("Data appended successfully!");
  }
);

// Read the contents of a file
fs.readFile(path.join("newFolder", "example.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log("File contents:", data);
});

// Rename a file
fs.rename(path.join("newFolder", "example.txt"), path.join("newFolder", "exampleAgain.txt"), (err) => {
  if (err) throw err;
  console.log("File renamed successfully!");
});
