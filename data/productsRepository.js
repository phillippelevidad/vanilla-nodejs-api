const products = require("./products.json");
const { writeJsonToFile } = require("../utils/writeJsonToFile");

function list() {
  return Promise.resolve(products);
}

function find(id) {
  return Promise.resolve(products.find((product) => product.id === id));
}

function create(product) {
  return new Promise((resolve) => {
    const newProduct = {
      ...product,
      id: products.length + 1,
    };

    products.push(newProduct);
    writeJsonToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

function update(product) {
  return new Promise((resolve) => {
    const index = products.findIndex((p) => p.id === product.id);
    products[index] = product;
    writeJsonToFile("./data/products.json", products);
    resolve(product);
  });
}

module.exports = {
  list,
  find,
  create,
  update,
};
