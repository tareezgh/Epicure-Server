import { Request, Response } from "express";
import { OrdersService } from "../services/orders.service";

export class OrdersController {
  public static async getOrders(req: Request, res: Response) {
    try {
      const service = new OrdersService();
      const orders = await service.getOrders();
      return res.send(orders);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async createOrder(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new OrdersService();
      const order = await service.createOrder(params);
      return res.status(200).send(order);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async updateOrder(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new OrdersService();
      const order = await service.updateOrder(params);
      return res.send(order);
    } catch (error) {
      return res.send(error);
    }
  }
}
