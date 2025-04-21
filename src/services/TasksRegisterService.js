import db from "../db/index.js";

class TasksRegisterService {
  constructor(service) {
    this.service = service;
  }

  async getTasks(user_id) {
    return await this.service("tasks").where({ user_id });
  }
}

export default new TasksRegisterService(db);
