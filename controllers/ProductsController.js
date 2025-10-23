import Product from "../models/Product.js";

// *********** GETALL ***************
export async function getAllProductsController(req, res) {
    try {
        //on peut recuperer tous les produits dans MongoDB
        const allProducts = await Product.find(); //await =>attend la reponse avant de continuer // find()cherchers les produits
        if (allProducts.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }
        res.status(200).json(allProducts);
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
}

// *********** POST/ADD ***************
export async function addProductController(req, res) {
    try {
        const { name, prix } = req.body;

        // ex: const dog = new Animal({ type: 'dog' });
        const newProduct = new Product({ name, prix });

        await newProduct.save(); //<=save() on enregistre le proudit dans BDD
        console.log(newProduct);

        return res.status(201).json({
            message: "Product successfully created",
            product: newProduct,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
}

// *********** DELETE  ***************
export async function deleteProductController(req, res) {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(400).json({ message: "Product not found" });
        }

        return res
            .status(200)
            .json({ message: "Product successfully deleted" });
    } catch (error) {
        return res.status(500).json({
            message: "Sever error",
            error: error.message,
        });
    }
}

// *********** UPDATE ***************

export async function updateProductController(req, res) {
    try {
        // ex: findByIdAndUpdate(id, update, options)
        const { id } = req.params;
        const updateData = req.body;

        const updateProduct = await Product.findByIdAndUpdate(id, updateData);

        if (!updateProduct) {
            return res.status(400).json({
                message: "Product not found",
            });
        }

        return res
            .status(200)
            .json({ message: "Product successfully updated" });
    } catch (error) {
        return res.status(500).json({
            message: "Sever error",
            error: error.message,
        });
    }
}

// import {
//     deleteProduct,
//     getAllProducts,
//     updateProduct,
// } from "../models/products.js";

// import { addProduct } from "../models/products.js";
// import { findProductById } from "../models/products.js";

// export function getAllProductsController(req, res) {
//     const allProducts = getAllProducts();
//     if (allProducts.length === 0) {
//         return res.status(404).json({ message: "No products found" });
//     }
//     res.status(200).json(allProducts);
// }

// export function addProductsController(req, res) {
//     const product = findProductById(req.body.id);
//     if (product) {
//         return res.status(400).json({ message: "Product already exists" });
//     }
//     let newProduct = req.body;
//     addProduct(newProduct);

//     return res
//         .status(200)
//         .json({ message: "Product successfully created", product: newProduct });
// }

// export function deleteProductController(req, res) {
//     // const product = findProductById(req.params.id);
//     const deletedProduct = deleteProduct(req.params.id);
//     if (!deletedProduct) {
//         return res
//             .status(400)
//             .json({ message: "Product successfully deleted." });
//     }

//     return res.status(200).json({ message: "Product not found" });
// }

// export function updateProductController(req, res) {
//     const product = findProductById(req.body.id);

//     if (!product) {
//         return res.status(400).json({
//             message: "Product not found",
//         });
//     }

//     updateProduct(req.body);
//     return res.status(200).json({ message: "Product successfully updated" });
// }
