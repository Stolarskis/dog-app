import dotenv from "dotenv";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Failed to find .env file");
}

export default {
  port: process.env.PORT,
  database: {
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASS,
    db_dialect: process.env.DB_DIALECT,
    db_database: process.env.DB_DATABASE,
    db_operator_alias: process.env.DB_OPERATOR_ALIAS,
  },
};
