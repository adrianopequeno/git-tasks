import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./src/graphql/index.js";

import { dataSources, context, formatError } from "./src/config/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  formatError,
});

server.listen().then(({ url }) => console.log(url));
