const url = require("url");

const myUrl = new URL("https://example.com:8000/path/name?query=string#hash");

// Accessing various properties of the URL
console.log("Protocol:", myUrl.protocol); // 'https:'
console.log("Host:", myUrl.host); // 'example.com:8000'
console.log("Hostname:", myUrl.hostname); // 'example.com'
console.log("Port:", myUrl.port); // '8000'
console.log("Pathname:", myUrl.pathname); // '/path/name'
console.log("Search:", myUrl.search); // '?query=string'
console.log("Search Params:", myUrl.searchParams); // URLSearchParams object
console.log("Hash:", myUrl.hash); // '#hash'
// Iterating over search parameters
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});

// Adding a new search parameter
myUrl.searchParams.append("newParam", "newValue");
console.log("Updated Search Params:", myUrl.searchParams.toString()); // 'query=string&newParam=newValue'
// Converting URL object back to string
console.log("Full URL:", myUrl.toString()); // 'https://example.com:8000/path/name?query=string&newParam=newValue#hash'
// Parsing a URL string
const parsedUrl = url.parse(
  "https://example.com:8000/path/name?query=string#hash"
);
console.log("Parsed URL:", parsedUrl);