import mongoose from "mongoose";

const { Schema, model } = mongoose;
const productSchema = new Schema({
    name: { type: String, required: true },
    prix: { type: Number, required: true },
});

const Product = model("Product", productSchema);
export default Product;
// let products = [
//     { id: 1, name: "pomme", prix: 2 },
//     { id: 2, name: "banane", prix: 1 },
//     { id: 3, name: "fraise", prix: 3 },
// ];

// export function getAllProducts() {
//     return products;
// }

// export function addProduct(newProduct) {
//     products.push(newProduct);
// }

// export function findProductById(id) {
//     return products.find((p) => p.id == id);
// }

// export function deleteProduct(id) {
//     const product = findProductById(id);
//     const indexOf = products.indexOf(product);
//     products.splice(indexOf, 1);

//     // return product;
// }

// export function updateProduct(updatedproduct) {
//     const product = findProductById(updatedproduct.id);

//     product.name = updatedproduct.name || product.name;
//     product.prix = updatedproduct.prix || product.prix;

//     return product;
// }
