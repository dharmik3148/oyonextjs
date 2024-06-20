import jwt from "jsonwebtoken";

export const signJwtToken = async (tokenId, secretCode, expiry) => {
  const token = await jwt.sign({ token: tokenId }, secretCode, {
    expiresIn: expiry,
  });
  return token;
};
