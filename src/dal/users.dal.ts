import Users from "../db/models/users";

export class UsersDal {
  public createUser(user: any) {
    user = new Users({
      email: user.email,
      password: user.password,
      authentication: "User",
    });

    user.save(function (err: any, results: any) {
      return results;
    });
  }

  public async getUserPassword(user: any) {
    const data = await Users.findOne({
      email: user.email,
    });

    return data?.password;
  }

  public async checkUser(user: any) {
    const data = await Users.findOne({
      email: user.email,
    });
    return data?.email === user.email;
  }

  public async updateUserAuth(user: any) {
    const data = await Users.findOne({
      email: user.email,
    }).updateOne({ $set: { authentication: user.authentication } });
    return data;
  }

  public findAll(query: any = null) {
    return Users.find(query);
  }
}
