import { OrdersDal } from "../dal/orders.dal";

export class OrdersService {
  public async getOrders() {
    const dal = new OrdersDal();
    const res = await dal.findAll();
    return res;
  }

  public async getOrdersOfUser(user: any) {
    const dal = new OrdersDal();
    const res = dal.getOrdersOfUser(user);
    return res;
  }

  public async createOrder(order: any) {
    const dal = new OrdersDal();
    const res = dal.createOrder(order);
    return res;
  }

  public async updateOrder(order: any) {
    const dal = new OrdersDal();
    const res = await dal.updateOrder(order);
    return res;
  }
  
  public async deleteOrderById(order: any) {
    const dal = new OrdersDal();
    const res = await dal.deleteOrderById(order);
    return res;
  }
}
