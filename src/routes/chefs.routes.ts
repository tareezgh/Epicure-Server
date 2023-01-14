import { Router } from "express";

import { ChefsController } from "../controllers/chefsController";

const router = Router();
router.get("/getChefs", ChefsController.getChefs);
router.get("/getChefOfTheWeek", ChefsController.getChefOfTheWeek);
router.post("/createChef", ChefsController.createChef);
router.post("/updateChef", ChefsController.updateChef); // not used

export default router;
