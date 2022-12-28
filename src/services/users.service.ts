import { UsersDal } from "../dal/users.dal";

export class UsersService {
  public async getUsers() {
    const dal = new UsersDal();
    const res = await dal.findAll();
    return res;
  }

  public async createUser(user: any) {
    const dal = new UsersDal();
    const res = dal.createUser(user);
    return res;
  }

  public async updateUser(user: any) {
    const dal = new UsersDal();
    const res = await dal.createUser(user);
    return res;
  }
}
