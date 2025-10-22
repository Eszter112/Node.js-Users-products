import { Router } from "express";

import {
    getAllUsersController,
    addUserController,
} from "../controllers/UsersController.js";
import { addProductsController } from "../controllers/ProductsController.js";

const router = Router();

router.get("/", getAllUsersController);
router.post("/", addProductsController);

export default router;
