import db from "../db/index.js";

class TasksRegisterService {
  constructor(service) {
    this.service = service;
  }

  async getTasks(user_id) {
    return await this.service("tasks").where({ user_id });
  }

  async getTaskById(user_id, id) {
    const task = await this.service("tasks").where({ id }).first();

    if (!task) throw new Error("Tarefa não encontrada");

    if (task.user_id != user_id) {
      throw new Error("Você não tem permissão!");
    }

    return task;
  }

  async addTask(user_id, data) {
    return await (
      await this.service("tasks")
        .insert({ user_id, ...data })
        .returning("*")
    )[0];
  }

  async deleteTask(user_id, id) {
    await this.getTaskById(user_id, id);

    return await this.service("tasks").where({ id }).delete();
  }

  async updateTask(user_id, id, data) {
    await this.getTaskById(user_id, id);

    return await (
      await this.service("tasks").where({ id }).update(data).returning("*")
    )[0];
  }
}

export default new TasksRegisterService(db);
