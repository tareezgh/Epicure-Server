import Chefs from "../db/models/chefs";

export class ChefsDal {
  public async createChef(chef: any) {
    chef = new Chefs({
      chefName: chef.chefName,
      description: chef.description,
      image: chef.image,

      restaurants: chef.restaurants,
      isNew: chef.isNew,
      isViewed: chef.isViewed,
      isChefOfTheWeek: chef.isChefOfTheWeek,
    });

    const response = await Chefs.create(chef);
    return response;
  }

  public async updateChef(chef: any) {
    const data = await Chefs.findOne({
      name: chef.name,
    }).updateOne({ $set: { age: chef.age } });
    return data;
  }

  public findAll(query: any = null) {
    return Chefs.find(query);
  }

  
  public async getChefOfTheWeek() {
    const data = await Chefs.aggregate([
      { $match: { isChefOfTheWeek: true } },
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

  // public async getChefOfTheWeek() {
  //   const data = await Chefs.findOne({
  //     isChefOfTheWeek: true,
  //   });
    // const data = await Chefs.find([
    //   { $match: { name: `${param.name}` } },
    //   {
    //     $lookup: {
    //       localField: "restaurants",
    //       foreignField: "_id",
    //       from: "restaurants",
    //       as: "restaurants",
    //     },
    //   },
    // ]);
  //   return data;
  // }
}
