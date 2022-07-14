const http = require("http");

const {
  tryHandleProductsRequest,
} = require("./controllers/tryHandleProductsRequest");

const server = http.createServer((req, res) => {
  try {
    if (!tryHandleProductsRequest(req, res)) {
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
