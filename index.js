import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./src/graphql/index.js";
import GitHubService from "./src/services/GitHub.service.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    gitHubService: GitHubService,
  }),
});

server.listen().then(({ url }) => console.log(url));
