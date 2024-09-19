import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create a new Sequelize instance to connect to the MySQL database
const sequelize = new Sequelize(
  process.env.DB_NAME || "default_db", // Database name
  process.env.DB_USER || "root", // Database user
  process.env.DB_PASSWORD || "", // Database password
  {
    host: process.env.DB_HOST || "localhost", // Database host
    dialect: "mysql", // MySQL as the database dialect
    port: Number(process.env.DB_PORT) || 3306, // MySQL default port is 3306
    logging: false, // Disable logging; set to true to log SQL queries
  }
);

// Test the connection to the database
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the MySQL database has been established successfully."
    );
  })
  .catch((error) => {
    console.error("Unable to connect to the MySQL database:", error);
  });

export default sequelize;
