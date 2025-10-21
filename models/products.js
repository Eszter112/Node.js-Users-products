let products = [
    { id: 1, name: "pomme", prix: 2 },
    { id: 2, name: "banane", prix: 1 },
    { id: 3, name: "fraise", prix: 3 },
];

export function getAllProducts() {
    return products;
}

export function addProduct(newProduct) {
    products.push(newProduct);
}

export function findProductById(id) {
    return products.find((p) => p.id == id);
}

export function deleteProduct() {
    const indexOf = products.indexOf(product);
    products.splice(indexOf, 1);
}

export function updateProduct() {}
