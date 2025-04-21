export class TaskNotFoundError extends Error {
  constructor(message, ...args) {
    super(message, ...args);

    this.message = message;
    this.name = "TaskNotFoundError";
  }
}
