import { NoPermissionError } from "../../errors/NoPermissionError/index.js";
import { TaskNotFoundError } from "../../errors/TaskNotFoundError/index.js";

export const formatError = (error) => {
  if (error.originalError instanceof NoPermissionError) {
    return new Error(error.message);
  }
  if (error.originalError instanceof TaskNotFoundError) {
    return new Error(error.message);
  }
  return error;
};
