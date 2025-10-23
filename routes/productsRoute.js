import { Router } from "express";

import {
    getAllProductsController,
    addProductController,
    deleteProductController,
    updateProductController,
} from "../controllers/ProductsController.js";

const router = Router();

router.get("/", getAllProductsController);
router.post("/", addProductController);
router.delete("/:id", deleteProductController);
router.put("/:id", updateProductController);

export default router;
