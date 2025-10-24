import { Router } from "express";

import { loginController } from "../controllers/LoginController.js";

const router = Router();

router.post("/", loginController);

export default router;
