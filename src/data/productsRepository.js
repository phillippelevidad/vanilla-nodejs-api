import products from "./products.json" assert { type: "json" };
import { writeJsonToFile } from "../utils/writeJsonToFile.js";

const FILE_PATH = "./src/data/products.json";

export function list() {
  return Promise.resolve(products);
}

export function find(id) {
  return Promise.resolve(products.find((product) => product.id === id));
}

export function create(product) {
  return new Promise((resolve) => {
    const newProduct = {
      ...product,
      id: products.length + 1,
    };

    products.push(newProduct);
    writeJsonToFile(FILE_PATH, products);
    resolve(newProduct);
  });
}

export function update(product) {
  return new Promise((resolve) => {
    const index = products.findIndex((p) => p.id === product.id);
    products[index] = product;
    writeJsonToFile(FILE_PATH, products);
    resolve(product);
  });
}

export function deleteProduct(id) {
  return new Promise((resolve) => {
    const productsWithoutDeleted = products.filter(
      (product) => product.id !== id
    );
    writeJsonToFile(FILE_PATH, productsWithoutDeleted);
    resolve(null);
  });
}
