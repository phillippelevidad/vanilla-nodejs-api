const productsRepository = require("../data/productsRepository");
const { getJsonBody } = require("../utils/getJsonBody");

async function list(req, res) {
  try {
    const products = await productsRepository.list();
    res.writeHead(200, { "Content-Type": "text/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

async function get(req, res, id) {
  try {
    const product = await productsRepository.find(id);

    if (product) {
      res.writeHead(200, { "Content-Type": "text/json" });
      res.end(JSON.stringify(product));
      return;
    }

    res.writeHead(404, { "Content-Type": "text/json" });
    res.end(JSON.stringify({ message: "Product not found" }));
  } catch (error) {
    console.log(error);
  }
}

async function create(req, res) {
  try {
    const body = await getJsonBody(req);
    const product = await productsRepository.create(body);
    res.writeHead(201, {
      "Content-Type": "text/json",
      Location: `/api/products/${product.id}`,
    });
    res.end(JSON.stringify(product));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  list,
  get,
  create,
};
