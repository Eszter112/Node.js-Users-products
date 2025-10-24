import { Router } from "express";

import {
    getAllUsersController,
    addUserController,
    deleteUserController,
    updateUserController,
} from "../controllers/UsersController.js";

const router = Router();

router.get("/", getAllUsersController);
router.post("/", addUserController);
router.delete("/:id", deleteUserController);
router.put("/:id", updateUserController);

export default router;
