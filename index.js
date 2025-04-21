import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./src/graphql/index.js";
import GitHubService from "./src/services/GitHub.service.js";
import UserRegisterService from "./src/services/UserRegisterService.js";
import TasksRegisterService from "./src/services/TasksRegisterService.js";
import { NoPermissionError } from "./src/errors/NoPermissionError/index.js";
import { TaskNotFoundError } from "./src/errors/TaskNotFoundError/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    gitHubService: GitHubService,
    userRegisterService: UserRegisterService,
    tasksService: TasksRegisterService,
  }),
  context: ({ req }) => {
    const user_id = req.headers.authorization;

    return {
      user_id,
    };
  },
  formatError: (error) => {
    if (error.originalError instanceof NoPermissionError) {
      return new Error(error.message);
    }
    if (error.originalError instanceof TaskNotFoundError) {
      return new Error(error.message);
    }
    return error;
  },
});

server.listen().then(({ url }) => console.log(url));
