import { Router } from "express";

import {
    getAllProductsController,
    addProductsController,
    deleteProductController,
    updateProductController,
} from "../controllers/ProductsController.js";

const router = Router();

router.get("/", getAllProductsController);
router.post("/", addProductsController);
router.delete("/:id", deleteProductController);
router.put("/", updateProductController);

export default router;
