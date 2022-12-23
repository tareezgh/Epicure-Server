import { Request, Response } from "express";
import { DishesService } from "../services/dishes.service";

export class DishesController {
  public static async getDishes(req: Request, res: Response) {
    try {
      const service = new DishesService();
      const dishes = await service.getDishes();
      return res.send(dishes);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async createDish(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new DishesService();
      const dish = await service.createDish(params);
      return res.status(200).send(dish);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async updateDish(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new DishesService();
      const dish = await service.updateDish(params);
      return res.send(dish);
    } catch (error) {
      return res.send(error);
    }
  }
}
