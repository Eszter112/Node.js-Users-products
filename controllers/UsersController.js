import {
    getAllUsers,
    addUser,
    findUserByEmail,
    findUserById,
    passwordVerify,
} from "../models/users.js";

export function getAllUsersController(req, res) {
    const allUsers = getAllUsers();
    if (allUsers.length === 0) {
        return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(allUsers);
}

export function addUserController(req, res) {
    const password = passwordVerify(req.body.password);
    if (!password) {
        return res.status(200).json({
            message:
                "Invalid password. It must be 7–15 characters long, include at least one digit and one special character (!@#$%^&*), and contain only allowed characters ",
        });
    }

    const user = findUserByEmail(req.body.email);
    if (user) {
        return res.status(400).json({ message: "Email already exists" });
    }
    let newUser = req.body;

    addUser(newUser);
    return res.status(200).json({ message: "User successfully created" });
}
