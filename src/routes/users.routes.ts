import { Router } from "express";

import { UsersController } from "../controllers/usersController";

const router = Router();

router.get("/getUsers", UsersController.getUsers);
router.post("/createUser", UsersController.createUser);
router.post("/updateUser", UsersController.updateUser);

export default router;
