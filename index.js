import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./src/graphql/index.js";
import GitHubService from "./src/services/GitHub.service.js";
import UserRegisterService from "./src/services/UserRegisterService.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    gitHubService: GitHubService,
    userRegisterService: UserRegisterService,
  }),
});

server.listen().then(({ url }) => console.log(url));
