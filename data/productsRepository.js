const products = require("./products.json");

async function list() {
  return Promise.resolve(products);
}

async function find(id) {
  return Promise.resolve(products.find((product) => product.id === id));
}

module.exports = {
  list,
  find,
};
