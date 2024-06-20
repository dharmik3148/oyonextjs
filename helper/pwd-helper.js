import bcrypt from "bcrypt";

export const hashPassword = async (data, saltRounds) => {
  const hashedData = await bcrypt.hashSync(data, saltRounds);
  return hashedData;
};

export const matchPassword = async (data, savedData) => {
  const mathedData = await bcrypt.compareSync(data, savedData);
  return mathedData;
};
