import Chefs from "../db/models/chefs";
import Restaurants from "../db/models/restaurants";

export class RestaurantsDal {
  public async createRestaurant(restaurant: any) {
    restaurant = new Restaurants({
      name: restaurant.name,
      chefName: restaurant.chefName,
      restaurantRating: restaurant.restaurantRating,
      isPopular: restaurant.isPopular,
      isNewRestaurant: restaurant.isNewRestaurant,
      isOpen: restaurant.isOpen,
      address: restaurant.address,
      image: restaurant.image,
    });

    const response = await Restaurants.create(restaurant);
    const result = await Chefs.findOne({
      chefName: response.chefName,
    }).updateOne({
      $push: { restaurants: response._id },
    });
    return response;
  }

  public findAll() {
    return Restaurants.find();
  }

  public async getRestaurant(param: { [key: string]: string }) {
    const data = await Restaurants.findOne({
      name: `${param.name}`,
    });
    return data;
  }
}
