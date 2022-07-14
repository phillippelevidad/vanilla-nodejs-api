import { createServer } from "http";
import { tryHandleProductsRequest } from "./controllers/tryHandleProductsRequest.js";

const server = createServer(async (req, res) => {
  try {
    const isHandled = await tryHandleProductsRequest(req, res);
    if (!isHandled) {
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
