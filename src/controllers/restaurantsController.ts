import { Request, Response } from "express";
import { RestaurantsService } from "../services/restaurants.service";

export class RestaurantsController {
  public static async getRestaurants(req: Request, res: Response) {
    const service = new RestaurantsService();
    const restaurants = await service.getRestaurants();
    return res.send(restaurants);
  }

  public static async getRestaurant(req: Request, res: Response) {
    try {
      const param = req.body;
      const service = new RestaurantsService();
      const restaurant = await service.getRestaurant(param);
      return res.send(restaurant);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async createRestaurant(req: Request, res: Response) {
    const params = req.body;
    const service = new RestaurantsService();
    const restaurant = await service.createRestaurant(params);
    return res.send(restaurant);
  }
}
