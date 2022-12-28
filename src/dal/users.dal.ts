import Users from "../db/models/users";

export class UsersDal {
  public createUser(user: any) {
    user = new Users({
      name: user.name,
    });

    user.save(function (err: any, results: any) {
      if (err) {
        throw err;
      }
      return results;
    });
  }

  public async updateUser(user: any) {
    const data = await user
      .findOne({
        name: user.name,
      })
      .updateOne({ $set: { age: user.age } });
    return data;
  }

  public findAll(query: any = null) {
    return Users.find(query);
  }
}
