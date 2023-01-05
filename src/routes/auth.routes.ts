import { Router } from "express";

import { AuthController } from "../controllers/authController";

const router = Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

// router.get("/getUsers", UsersController.getUsers);
// router.post("/createUser", UsersController.createUser);
// router.post("/updateUser", UsersController.updateUser);

export default router;
