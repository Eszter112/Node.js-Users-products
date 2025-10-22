import { findUserByEmail } from "../models/users.js";

export function loginController(req, res) {
    const email = req.body.email;
    const user = findUserByEmail(email);

    if (!user) {
        return res.status(404).json({ message: "No user found" });
    }

    const password = req.body.password;

    if (user.password !== password) {
        return res.status(400).json({ message: "Invalid password" });
    }

    return res.status(200).json({
        message:
            "Welcome to Hell, JavasScript edition - abandon hope and bugs are eternal  ",
        user: { name: user.name },
    });
}
