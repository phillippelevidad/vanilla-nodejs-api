const products = require("./products.json");

async function list() {
  return Promise.resolve(products);
}

module.exports = {
  list,
};
