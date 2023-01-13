const express = require("express");
import chefsRoutes from "./chefs.routes";
import restaurantsRoutes from "./restaurants.routes";
import dishesRoutes from "./dishes.routes";
import ordersRoutes from "./orders.routes";
import authRoutes from "./auth.routes";

const router = express.Router();

router.use("/api/chefs/", chefsRoutes);
router.use("/api/restaurants/", restaurantsRoutes);
router.use("/api/dishes/", dishesRoutes);
router.use("/api/orders/", ordersRoutes);
router.use("/api/auth/", authRoutes);
export default router;
