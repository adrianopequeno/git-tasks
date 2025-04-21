import db from "../db/index.js";

class UserRegisterService {
  constructor(service) {
    this.service = service;
  }

  async addUser(user) {
    return await (
      await this.service("users").insert(user).returning("*")
    )[0];
  }

  async getUserByLogin(login) {
    return await this.service("users").where({ login }).first();
  }
}

export default new UserRegisterService(db);
