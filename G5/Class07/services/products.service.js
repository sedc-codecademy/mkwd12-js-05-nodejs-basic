import fsPromises from "fs/promises";
import path from "path";
import errorEmitter from "./error-handler.service.js";

const PRODUCTS_DB_PATH = path.join("db", "products.db.json"); // 'db/' + 'products.db.json' =>
// db/products.db.json;

export const readProducts = async () => {
  try {
    const rawProducts = await fsPromises.readFile(PRODUCTS_DB_PATH, {
      encoding: "utf-8",
    });
    const products = JSON.parse(rawProducts);
    return products;
  } catch (error) {
    errorEmitter.emit("error", error);
    throw new Error("Cannot read products");
  }
};

export const addProduct = async (product) => {
  try {
    const products = await readProducts();

    // will copy the procuts array at this point
    // and at the end of the array will add the new product (the argument)
    const newlyProducts = [...products, product];

    await fsPromises.writeFile(
      PRODUCTS_DB_PATH,
      JSON.stringify(newlyProducts, undefined, 2)
    );
  } catch (error) {
    errorEmitter.emit("error", error);
    throw new Error("Cannot add product");
  }
};

export const updateProduct = async (id, newProductValues) => {
  try {
    const products = await readProducts();

    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          id: product.id,
          name: newProductValues.name || product.name,
          color: newProductValues.color || product.color,
          size: newProductValues.size || product.size,
          material: newProductValues.material || product.material,
          price: newProductValues.price || product.price,
        };
      } else {
        return product;
      }
    });

    await fsPromises.writeFile(
      PRODUCTS_DB_PATH,
      JSON.stringify(updatedProducts, undefined, 2)
    );
  } catch (error) {
    errorEmitter.emit("error", error);
    throw new Error("Cannot edit product");
  }
};

export const getProductById = async (id) => {
  const products = await readProducts();

  const productFound = products.find((product) => product.id === id);

  return productFound;
};
