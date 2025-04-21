import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./src/graphql/index.js";
// import usuarioCadastroService from "./src/services/usuarioCadastroService.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: () => ({
  //   usuarioCadastroService: usuarioCadastroService,
  // }),
});

server.listen().then(({ url }) => console.log(url));
