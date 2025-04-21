import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./src/graphql/index.js";
import GitHubService from "./src/services/GitHub.service.js";
import UserRegisterService from "./src/services/UserRegisterService.js";
import TasksRegisterService from "./src/services/TasksRegisterService.js";

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
});

server.listen().then(({ url }) => console.log(url));
