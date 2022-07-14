const http = require("http");
const productsController = require("./controllers/productsController");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/products") {
    productsController.list(req, res);
  } else if (req.method === "GET" && req.url.match(/^\/api\/products\/\d+$/)) {
    const id = parseInt(req.url.split("/")[3], 10);
    productsController.get(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "text/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
