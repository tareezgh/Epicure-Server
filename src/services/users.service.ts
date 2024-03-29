import { UsersDal } from "../dal/users.dal";
const bcrypt = require("bcrypt");

export class UsersService {
  public async login(user: any) {
    const dal = new UsersDal();
    const hashedPasswordFromDB = await dal.getUserPassword(user);
    if (!hashedPasswordFromDB)
      return { status: "failure", message: "User doesn't exist!!" };
    const response = await bcrypt.compare(user.password, hashedPasswordFromDB);

    const userAuth = await dal.getUserAuth(user);
    if (response)
      return {
        status: "success",
        message: "User logged in",
        authentication: userAuth,
      };
    else return { status: "failure", message: "Incorrect email or password" };
  }

  public async register(user: any) {
    const dal = new UsersDal();
    const saltRounds = 10;
    const isUserExist = await dal.checkUser(user);
    if (isUserExist)
      return { status: "failure", message: "Email already used!" };

    bcrypt.hash(user.password, saltRounds, async (err: any, hash: any) => {
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
