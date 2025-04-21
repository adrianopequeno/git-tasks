import GitHubService from "../../services/GitHubService.js";
import TasksRegisterService from "../../services/TasksRegisterService.js";
import UserRegisterService from "../../services/UserRegisterService.js";

export const dataSources = () => ({
  gitHubService: GitHubService,
  userRegisterService: UserRegisterService,
  tasksService: TasksRegisterService,
});
