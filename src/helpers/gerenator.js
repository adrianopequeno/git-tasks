import jwt from "jsonwebtoken";

export const generator = {
  createToken(id) {
    return jwt.sign({ id }, "secret", { expiresIn: "1d" });
  },

  verifyToken(token) {
    return jwt.verify(token, "secret");
  },
};
