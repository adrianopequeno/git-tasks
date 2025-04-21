import { NoPermissionError } from "../../errors/NoPermissionError/index.js";
import { TaskNotFoundError } from "../../errors/TaskNotFoundError/index.js";
import { UserNotFoundError } from "../../errors/UserNotFoundError/index.js";

export const formatError = (error) => {
  if (error.originalError instanceof NoPermissionError) {
    return new Error(error.message);
  }
  if (error.originalError instanceof TaskNotFoundError) {
    return new Error(error.message);
  }
  if (error.originalError instanceof UserNotFoundError) {
    return new Error(error.message);
  }
  return error;
};
