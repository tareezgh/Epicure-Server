import Orders from "../db/models/orders";

export class OrdersDal {
  public createOrder(order: any) {
    order = new Orders({
      restaurant: order.restaurant,
      image: order.image,
      name: order.name,
      price: order.price,
      side: order.side,
      changes: order.changes,
      quantity: order.quantity,
    });

    order.save(function (err: any, results: any) {
      if (err) {
        throw err;
      }
      return results;
    });
  }

  public async updateOrder(order: any) {
    const data = await order
      .findOne({
        name: order.name,
      })
      .updateOne({ $set: { age: order.age } });
    return data;
  }

  public findAll(query: any = null) {
    return Orders.find(query);
  }
}
