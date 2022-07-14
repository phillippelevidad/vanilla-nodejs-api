const http = require("http");
const productsController = require("./controllers/productsController");

const server = http.createServer((req, res) => {
  if (req.url === "/api/products") {
    productsController.list(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/json" });
    res.end(JSON.stringify({ message: "Not found" }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
