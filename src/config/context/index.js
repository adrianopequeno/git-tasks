import { generator } from "../../helpers/gerenator.js";
import { NoPermissionError } from "../../errors/NoPermissionError/index.js";

export const context = ({ req }) => {
  const token = req.headers.authorization;

  return {
    validate() {
      try {
        const { id } = generator.verifyToken(token);
        return id;
      } catch (e) {
        throw new NoPermissionError("Você não esta autenticado!!!");
      }
    },
  };
};
