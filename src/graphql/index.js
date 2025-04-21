import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { loadFilesSync, mergeTypeDefs, mergeResolvers } from "graphql-tools";

// Equivalente ao __dirname:
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const allTypes = loadFilesSync(join(__dirname, "modules", "**", "*.gql"));
const allResolvers = loadFilesSync(
  join(__dirname, "modules", "**", "resolvers.js")
);

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

export { typeDefs, resolvers };
