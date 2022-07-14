const productsController = require("./productsController");

const API_PRODUCTS = "/api/products";
const API_PRODUCTS_ID = /^\/api\/products\/\d+$/;

async function tryHandleProductsRequest(req, res) {
  if (req.method === "GET" && req.url === API_PRODUCTS) {
    await productsController.list(req, res);
    return true;
  }

  if (req.method === "GET" && req.url.match(API_PRODUCTS_ID)) {
    const id = parseInt(req.url.split("/")[3], 10);
    await productsController.get(req, res, id);
    return true;
  }

  if (req.method === "POST" && req.url === API_PRODUCTS) {
    await productsController.create(req, res);
    return true;
  }

  if (req.method === "PATCH" && req.url.match(API_PRODUCTS_ID)) {
    const id = parseInt(req.url.split("/")[3], 10);
    await productsController.update(req, res, id);
    return true;
  }

  if (req.method === "DELETE" && req.url.match(API_PRODUCTS_ID)) {
    const id = parseInt(req.url.split("/")[3], 10);
    await productsController.deleteProduct(req, res, id);
    return true;
  }

  return false;
}

module.exports = {
  tryHandleProductsRequest,
};
