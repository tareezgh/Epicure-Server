import { UsersDal } from "../dal/users.dal";
import bcrypt from "bcrypt";

export class UsersService {
  public async login(user: any) {
    const dal = new UsersDal();
    const hashedPasswordFromDB = await dal.getUserPassword(user);
    if (!hashedPasswordFromDB) return { status: "failure", message: "Error" };
    const respond = await bcrypt.compare(user.password, hashedPasswordFromDB);

    if (!respond) return { status: "susses", message: "Susses" };
  }

  public async register(user: any) {
    const dal = new UsersDal();
    const saltRounds = 10;
    const isUserExist = await dal.checkUser(user);
    if (isUserExist) return { status: "failure", message: "Exist" };

    bcrypt.hash(user.password, saltRounds, async (err, hash) => {
      user["password"] = hash;
      const respond = await dal.createUser(user);
      return respond;
    });
  }

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
