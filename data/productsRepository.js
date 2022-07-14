const products = require("./products.json");
const { writeJsonToFile } = require("./writeJsonToFile");

function list() {
  return Promise.resolve(products);
}

function find(id) {
  return Promise.resolve(products.find((product) => product.id === id));
}

function create(product) {
  return new Promise((resolve) => {
    products.push(product);
    writeJsonToFile("./data/products.json", products);
    resolve(product);
  });
}

module.exports = {
  list,
  find,
  create,
};
