import {
  list,
  get,
  create,
  update,
  deleteProduct,
} from "./productsController.js";

const API_PRODUCTS = "/api/products";
const API_PRODUCTS_ID = /^\/api\/products\/\d+$/;

export async function anotherFunction() {
  console.log("anotherFunction");
}

export async function tryHandleProductsRequest(req, res) {
  if (req.method === "GET" && req.url === API_PRODUCTS) {
    await list(req, res);
    return true;
  }

  if (req.method === "GET" && req.url.match(API_PRODUCTS_ID)) {
    const id = parseInt(req.url.split("/")[3], 10);
    await get(req, res, id);
    return true;
  }

  if (req.method === "POST" && req.url === API_PRODUCTS) {
    await create(req, res);
    return true;
  }

  if (req.method === "PATCH" && req.url.match(API_PRODUCTS_ID)) {
    const id = parseInt(req.url.split("/")[3], 10);
    await update(req, res, id);
    return true;
  }

  if (req.method === "DELETE" && req.url.match(API_PRODUCTS_ID)) {
    const id = parseInt(req.url.split("/")[3], 10);
    await deleteProduct(req, res, id);
    return true;
  }

  return false;
}
