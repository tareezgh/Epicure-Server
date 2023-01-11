import Dishes from "../db/models/dishes";

export class DishesDal {
  public async createDish(dish: any) {
    dish = new Dishes({
      name: dish.name,
      description: dish.description,
      image: dish.image,
      restaurant: dish.restaurant,
      price: dish.price,
      signature: dish.signature,
      type: dish.type,
    });

    const response = await Dishes.create(dish);
    const result = await Dishes.findOne({
      name: response.name,
    }).updateOne({
      $push: { restaurants: response._id },
    });
    return response;
  }

  public async updateDish(dish: any) {
    const data = await Dishes.findOne({
      name: dish.name,
    }).updateOne({ $set: { price: dish.price } });
    return data;
  }

  public async getDishesOfRestaurant(restaurantName: any) {
    const data = await Dishes.find({
      restaurant: restaurantName.name,
    });
    return data;
  }

  public findAll(query: any = null) {
    return Dishes.find(query);
  }

  public async getDish(param: { [key: string]: string }) {
    const data = await Dishes.aggregate([
      { $match: { name: `${param.name}` } },
      {
        $lookup: {
          localField: "restaurants",
          foreignField: "_id",
          from: "restaurants",
          as: "restaurants",
        },
      },
    ]);
    return data;
  }
}
