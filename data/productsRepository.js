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
    const { name, price, description, image, quantity, total } = product;
    const newProduct = {
      id: products.length + 1,
      name,
      price,
      description,
      image,
      quantity,
      total,
    };

    products.push(newProduct);
    writeJsonToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

module.exports = {
  list,
  find,
  create,
};
