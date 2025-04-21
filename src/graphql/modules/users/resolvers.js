import { generator } from "../../../helpers/gerenator.js";

export const resolvers = {
  User: {
    async tasks(user, _, { dataSources }) {
      return await dataSources.tasksService.getTasks(user.id);
    },
  },
  Query: {
    async user(_, { login }, { dataSources }) {
      const userFound = await dataSources.userRegisterService.getUserByLogin(
        login
      );

      if (userFound) {
        userFound.token = generator.createToken(userFound.id);
        return userFound;
      }

      const { login: loginGit, avatar_url } =
        await dataSources.gitHubService.getUser(login);

      const newUser = dataSources.userRegisterService.addUser({
        login: loginGit,
        avatar_url,
      });

      newUser.token = generator.createToken(newUser.id);

      return newUser;
    },
  },
};
