const productsRepository = require("../data/productsRepository");

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

module.exports = {
  list,
  get,
};
