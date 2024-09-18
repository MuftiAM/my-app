import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create a new Sequelize instance to connect to the database
const sequelize = new Sequelize(
  process.env.DB_NAME || "default_db", // Database name
  process.env.DB_USER || "root", // Database user
  process.env.DB_PASSWORD || "", // Database password
  {
    host: process.env.DB_HOST || "localhost", // Database host
    dialect: "postgres", // Database dialect (use 'mysql' for MySQL)
    port: Number(process.env.DB_PORT) || 5432, // Database port
    logging: false, // Disable logging; set to true to log SQL queries
  }
);

// Test the connection to the database
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

export default sequelize;
