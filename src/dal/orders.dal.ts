import Orders from "../db/models/orders";
import Users from "../db/models/users";

export class OrdersDal {
  public async createOrder(order: any) {
    order = new Orders({
      restaurant: order.restaurant,
      userName: order.userName,
      image: order.image,
      name: order.name,
      price: order.price,
      side: order.side,
      changes: order.changes,
      quantity: order.quantity,
    });

    const response = await Orders.create(order);
    await Users.findOne({
      email: response.userName,
    }).updateOne({
      $push: { orders: response._id },
    });
    return response;
  }

  public async updateOrder(order: any) {
    const data = await order
      .findOne({
        name: order.name,
        userName: order.userName,
      })
      .updateOne({ $set: { quantity: order.quantity } });
    return data;
  }

  public findAll(query: any = null) {
    return Orders.find(query);
  }

  public async getOrdersOfUser(user: any) {
    const data = await Orders.find({
      userName: user.name,
    });
    return data;
  }

  // public async getOrders(param: { [key: string]: string }) {
  //   const data = await Orders.aggregate([
  //     { $match: { userName: `${param.name}` } },
  //     {
  //       $lookup: {
  //         localField: "restaurants",
  //         foreignField: "_id",
  //         from: "restaurants",
  //         as: "restaurants",
  //       },
  //     },
  //   ]);
  //   return data;
  // }
}
