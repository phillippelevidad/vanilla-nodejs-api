const http = require("http");
const productsController = require("./controllers/productsController");

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET" && req.url === "/api/products") {
      productsController.list(req, res);
    } else if (
      req.method === "GET" &&
      req.url.match(/^\/api\/products\/\d+$/)
    ) {
      const id = parseInt(req.url.split("/")[3], 10);
      productsController.get(req, res, id);
    } else if (req.method === "POST" && req.url === "/api/products") {
      productsController.create(req, res);
    } else if (
      req.method === "PATCH" &&
      req.url.match(/^\/api\/products\/\d+$/)
    ) {
      const id = parseInt(req.url.split("/")[3], 10);
      productsController.update(req, res, id);
    } else if (
      req.method === "DELETE" &&
      req.url.match(/^\/api\/products\/\d+$/)
    ) {
      const id = parseInt(req.url.split("/")[3], 10);
      productsController.deleteProduct(req, res, id);
    } else {
      res.writeHead(404, { "Content-Type": "text/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
    }
  } catch (error) {
    console.log(error);
    res.writeHead(500, { "Content-Type": "text/json" });
    res.end(JSON.stringify({ message: "Internal server error" }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
