const path = require("path");


// BaseName
console.log(path.basename(__filename));


// DirectoryName
console.log(path.dirname(__filename));

// ExtName
console.log(path.extname(__filename));

// Parse
console.log(path.parse(__filename));

// Join Paths
console.log(path.join(__dirname, "test", "hello.html"));
