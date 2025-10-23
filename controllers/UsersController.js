// import {
//     getAllUsers,
//     addUser,
//     findUserByEmail,
//     findUserById,
//     passwordVerify,
// } from "../models/users.js";
import bcrypt from "bcrypt";
import User from "../models/User.js";

// *********** GETALL ***************

export async function getAllUsersController(req, res) {
    try {
        const allUsers = await User.find();
        if (allUsers.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }

        res.status(200).json(allUsers);
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Erreur serveur", erreur: error.message });
    }
}

// *********** REGISTER ***************
export async function addUserController(req, res) {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        //verif email
        const passwordRegex =
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                message:
                    "Invalid password. It must be 7-15 characters long, include at least one digit and one special character (!@#$%^&*), and contain only allowed characters.",
            });
        }

        //verif user
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        //hashPW
        const passwordHash = await bcrypt.hash(password, 10);

        // new user
        const newUser = new User({ name, email, password:passwordHash});
        await newUser.save();

        return res.status(201).json({ message: "User successfully created" });
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Erreur serveur", erreur: error.message });
    }
}

// *********** DELETE  ***************

export async function deleteUserController(req, res) {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if (!deleteUser) {
            return res.status(400).json({
                message: "User not found",
            });
        }
        return res.status(200).json({ message: "User successfully deleted" });
    } catch (error) {
        return res.staus(500).json({
            message: "Server error",
            error: error.message,
        });
    }
}

// ***********  UPDATE ***************
export async function updateUserController(req, res) {
    try {
        // ex: findByIdAndUpdate(id, update, options)
        const { id } = req.params;
        const updateData = req.body;

        const updateUser = await User.findByIdAndUpdate(id, updateData);

        if (!updateUser) {
            return res.status(400).json({
                message: "User not found",
            });
        }

        return res.status(200).json({ message: "User successfully updated" });
    } catch (error) {
        return res.status(500).json({
            message: "Sever error",
            error: error.message,
        });
    }
}

// const password = passwordVerify(req.body.password);
// if (!password) {
//     return res.status(200).json({
//         message:
//             "Invalid password. It must be 7-15 characters long, include at least one digit and one special character (!@#$%^&*), and contain only allowed characters ",
//     });
// }

// const user = findUserByEmail(req.body.email);
// if (user) {
//     return res.status(400).json({ message: "Email already exists" });
// }
// let newUser = req.body;

// addUser(newUser);
// return res.status(200).json({ message: "User successfully created" });
