// npm init -y
// npm install express
// npm install nodemon
// modifier le package.json => "type": "module"
//npx nodemon app.js <=pr lancer la serveur
import dotenv from "dotenv"; //bibliotheque dotenv pr gerer les variables d'enviroment
import mongoose from "mongoose"; //bibliotheque pr mongoose

dotenv.config(); //charge les variables depuis .env

mongoose //connexion mongoDb Atlas
    .connect(process.env.MONGODB_URI) //URI= adresse de la BDD
    .then(() => console.log("MongoDB Atlas connected!"))
    .catch((err) => console.error("Connection error", err));

import express from "express"; //express est une biblotheque serveur web

const app = express();
const port = 3000;
app.use(express.json());
// ********* Product *********
import productRoutes from "./routes/productsRoute.js";
app.use("/product", productRoutes);

// ********* User *********

import usersRoute from "./routes/usersRoute.js";
app.use("/user", usersRoute);

// ********* Login  *********
import loginRoute from "./routes/loginRoute.js";
app.use("/login", loginRoute);

app.listen(port, () => {
    console.log(`server ok sur port ${port}`);
});

// import {
//     getAllProductsController,
//     addProductsController,
//     deleteProductController,
//     updateProductController,
// } from "./controllers/ProductsController.js";

// app.get("/products", getAllProductsController);
// app.post("/products", addProductsController);
// app.delete("/products/:id", deleteProductController);
// app.put("/products", updateProductController);

// ********* User *********
// import {
//     addUserController,
//     getAllUsersController,
// } from "./controllers/UsersController.js";

// app.get("/users", getAllUsersController);
// app.post("/users", addUserController);

// let users = [
//     { id: 1, name: "Lola", age: 26 },
//     { id: 2, name: "Josepf", age: 22 },
// ];

// // *********** GET ************

// //on cree un route GET pour URL /users =>quand je visite le serveur repond
// app.get("/users", (req, res) => {
//     //req=> la requette envoyée par utilisateur , res=> response que la serveur va envoyer
//     if (users.length === 0) {
//         //si la liste d'user est vide , le serveur va renvoyer une erreor 400
//         return res.status(400).json({ message: "user dont exist" });
//     }
//     //si la liste n'est pas vide =>code 200 ok + affiche les users
//     return res.status(200).json(users);
// });

// // ***********  POST  ************
// app.post("/users", (req, res) => {
//     const user = users.find((u) => u.id == req.body.id); //user existe?? si oui=> message
//     if (user) {
//         return res.status(400).json({
//             message: "user already exists",
//         });
//     }

//     // si user n'existe pas , qo'on a envoye dans body => push newUser
//     let newUser = req.body;
//     users.push(newUser);

//     return res.status(200).json({ message: "user create ", user: newUser });
// });

// // ***********  DELETE  ************
// app.delete("/users/:id", (req, res) => {
//     const user = users.find((u) => u.id == req.params.id);
//     if (!user) {
//         return res.status(400).json({ message: "user don't existe" });
//     }

//     const indexOf = users.indexOf(user);
//     users.splice(indexOf, 1);

//     return res.status(200).json({ message: "user delete" });
// });

// // ***********  PUT  ************
// app.put("/users", (req, res) => {
//     const user = users.find((u) => u.id == req.body.id);
//     if (!user) {
//         return res.status(400).json({ message: "user doesn't exist" });
//     }

//     //modifier le name et age
//     user.name = req.body.name || user.name;
//     user.age = req.body.age || user.age;

//     return res.status(200).json({ message: " user updated" });
// });

// ************* Products **************
// let products = [
//     { id: 1, name: "pomme", prix: 2 },
//     { id: 2, name: "banana", prix: 1 },
//     { id: 3, name: "fraise", prix: 3 },
// ];

//GET

// app.get("/products", (req, res) => {
//     //req=> la requette envoyée par utilisateur , res=> response que la serveur va envoyer
//     if (products.length === 0) {
//         //si la liste d'user est vide , le serveur va renvoyer une erreor 400
//         return res.status(400).json({ message: "product dont exist" });
//     }
//     //si la liste n'est pas vide =>code 200 ok + affiche les users
//     return res.status(200).json(products);
// });

//POST
// app.post("/products", (req, res) => {
//     const product = products.find((p) => p.id == req.body.id); //product existe?? si oui=> message
//     if (product) {
//         return res.status(400).json({
//             message: "product already exists",
//         });
//     }

//     // si product n'existe pas , qo'on a envoye dans body => push newProduct
//     let newProduct = req.body;
//     products.push(newProduct);

//     return res
//         .status(200)
//         .json({ message: "product create ", product: newProduct });
// });

// // DELETE    =>dans params avec id
// app.delete("/products/:id", (req, res) => {
//     const product = products.find((p) => p.id == req.params.id);

//     if (!product) {
//         return res.status(400).json({ message: "product doesn't existe" });
//     }

//     const indexOf = products.indexOf(product);
//     products.splice(indexOf, 1);

//     return res.status(200).json({ message: "product deleted" });
// });

// //PUT

// app.put("/products/", (req, res) => {
//     const product = products.find((p) => p.id == req.body.id);
//     if (!product) {
//         return res.status(400).json({
//             message: "product doesn't existe",
//         });
//     }

//     product.name = req.body.name || product.name;
//     product.prix = req.body.prix || product.prix;

//     return res.status(200).json({ message: "product updated" });
// });

// ***********  LISTEN PORT  ************
