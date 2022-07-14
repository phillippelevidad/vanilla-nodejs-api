const productsRepository = require("../data/productsRepository");
const { getJsonBody } = require("../utils/getJsonBody");

async function list(req, res) {
  const products = await productsRepository.list();
  res.writeHead(200, { "Content-Type": "text/json" });
  res.end(JSON.stringify(products));
}

async function get(req, res, id) {
  const product = await productsRepository.find(id);
  if (product) {
    res.writeHead(200, { "Content-Type": "text/json" });
    res.end(JSON.stringify(product));
    return;
  }

  res.writeHead(404, { "Content-Type": "text/json" });
  res.end(JSON.stringify({ message: "Product not found" }));
}

async function create(req, res) {
  const { name, price, description, image, quantity, total } =
    await getJsonBody(req);
  const product = await productsRepository.create({
    name,
    price,
    description,
    image,
    quantity,
    total,
  });

  res.writeHead(201, {
    "Content-Type": "text/json",
    Location: `/api/products/${product.id}`,
  });
  res.end(JSON.stringify(product));
}

async function update(req, res, id) {
  const targetProduct = await productsRepository.find(id);
  if (!targetProduct) {
    res.writeHead(404, { "Content-Type": "text/json" });
    res.end(JSON.stringify({ message: "Product not found" }));
    return;
  }

  const { name, price, description, image, quantity, total } =
    await getJsonBody(req);
  const updatedProduct = await productsRepository.update({
    id,
    name: name ?? targetProduct.name,
    price: price ?? targetProduct.price,
    description: description ?? targetProduct.description,
    image: image ?? targetProduct.image,
    quantity: quantity ?? targetProduct.quantity,
    total: total ?? targetProduct.total,
  });

  res.writeHead(201, { "Content-Type": "text/json" });
  res.end(JSON.stringify(updatedProduct));
}

async function deleteProduct(req, res, id) {
  const targetProduct = await productsRepository.find(id);
  if (!targetProduct) {
    res.writeHead(404, { "Content-Type": "text/json" });
    res.end(JSON.stringify({ message: "Product not found" }));
    return;
  }

  await productsRepository.deleteProduct(id);

  res.writeHead(204);
  res.end();
}

module.exports = {
  list,
  get,
  create,
  update,
  deleteProduct,
};
