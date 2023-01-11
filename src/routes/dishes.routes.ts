import { Router } from "express";

import { DishesController } from "../controllers/dishesController";

const router = Router();

router.get("/getDishes", DishesController.getDishes);
router.post("/getDishesOfRestaurant", DishesController.getDishesOfRestaurant);
router.post("/createDish", DishesController.createDish);
router.post("/updateDish", DishesController.updateDish);
router.get("/getDishes2", DishesController.getDishes2);

export default router;
