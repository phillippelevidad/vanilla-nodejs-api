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

module.exports = {
  list,
};
