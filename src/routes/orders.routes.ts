import { Router } from "express";

import { OrdersController } from "../controllers/ordersController";

const router = Router();

router.get("/getOrders", OrdersController.getOrders);
router.post("/getOrdersOfUser", OrdersController.getOrdersOfUser);
router.post("/createOrder", OrdersController.createOrder);
router.post("/updateOrder", OrdersController.updateOrder);

export default router;
