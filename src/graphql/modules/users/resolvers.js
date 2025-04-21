export const resolvers = {
  Query: {
    async user(_, { login }, { dataSources }) {
      return await dataSources.gitHubService.getUser(login);
    },
  },
};
