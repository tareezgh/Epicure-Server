import Orders from "../db/models/orders";

export class OrdersDal {
  public createOrder(order: any) {
    order = new Orders({
      name: order.name,
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
