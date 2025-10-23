import bcrypt from "bcrypt";
import User from "../models/User.js";

export async function loginController(req, res) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "No user found" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res
                .status(400)
                .json({ message: "Invalid email or password" });
        }

        return res.status(200).json({
            message:
                "Welcome to Hell, JavasScript edition - abandon hope and bugs are eternal",
            user: { name: user.name },
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
}

// ******************************************************/
// Ex:
// async function checkUser(username, password) {
//     //... fetch user from a db etc.
//     const match = await bcrypt.compare(password, user.passwordHash);
//     if(match) {
//         //login
//     }
//     //...
// }
// import { findUserByEmail } from "../models/User.js";
// ******************************************************/
// export async function loginController(req, res) {
//     const email = req.body.email;
//     const user = await User.findOne({email});

//     if (!user) {
//         return res.status(404).json({ message: "No user found" });
//     }

//     const password = req.body.password;

//     if (user.password !== password) {
//         return res.status(400).json({ message: "Invalid password" });
//     }

//     return res.status(200).json({
//         message:
//             "Welcome to Hell, JavasScript edition - abandon hope and bugs are eternal",
//         user: { name: user.name },
//     });
// }
