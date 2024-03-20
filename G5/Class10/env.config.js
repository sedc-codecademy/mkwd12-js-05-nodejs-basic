import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  JWT_SECRET: process.env.MY_SECRET_VARIABLE,
};
