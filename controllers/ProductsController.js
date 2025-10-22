import {
    deleteProduct,
    getAllProducts,
    updateProduct,
} from "../models/products.js";
// import { products } from "../models/products.js";
import { addProduct } from "../models/products.js";
import { findProductById } from "../models/products.js";

export function getAllProductsController(req, res) {
    const allProducts = getAllProducts();
    if (allProducts.length === 0) {
        return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json(allProducts);
}

export function addProductsController(req, res) {
    const product = findProductById(req.body.id);
    if (product) {
        return res.status(400).json({ message: "Product already exists" });
    }
    let newProduct = req.body;
    addProduct(newProduct);

    return res
        .status(200)
        .json({ message: "Product successfully created", product: newProduct });
}

export function deleteProductController(req, res) {
    // const product = findProductById(req.params.id);
    const deletedProduct = deleteProduct(req.params.id);
    if (!deletedProduct) {
        return res
            .status(400)
            .json({ message: "Product successfully deleted." });
    }

    return res.status(200).json({ message: "Product not found" });
}

export function updateProductController(req, res) {
    const product = findProductById(req.body.id);

    if (!product) {
        return res.status(400).json({
            message: "Product not found",
        });
    }

    updateProduct(req.body);
    return res.status(200).json({ message: "Product successfully updated" });
}
