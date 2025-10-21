import { deleteProduct, getAllProducts } from "../models/products.js";
import { addProduct } from "../models/products.js";
import { findProductById } from "../models/products.js";

export function getAllProductsController(req, res) {
    const allProducts = getAllProducts();
    if (allProducts.length === 0) {
        return res.status(404).json({ message: "No produits found" });
    }
    res.status(200).json(allProducts);
}

export function addProductsController(req, res) {
    const product = findProductById(req.body.id);
    if (product) {
        return res.status(400).json({ message: "product alredy exist" });
    }
    let newProduct = req.body;
    addProduct(newProduct);

    return res
        .status(200)
        .json({ message: "product create ", product: newProduct });
}

export function deleteProductController(req, res) {
    const product = findProductById(req.params.id);
    if (!product) {
        return res.status(400).json({ message: "product doesn't existe" });
    }

    deleteProduct(req.params.id);

    return res.status(200).json({ message: "product deleted" });
}
