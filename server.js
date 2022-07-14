const http = require("http");
const products = require("./data/products.json");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/json" });
  res.end(JSON.stringify(products));
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
