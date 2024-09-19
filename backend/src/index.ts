import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import CORS for cross-origin requests
import authRoutes from "./routes/authRoutes"; // Import the auth routes
import sequelize from "./config/database"; // Import the Sequelize instance
import User from "./models/userModel"; // Import the User model

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS for all routes

// Use the authentication routes
app.use("/api", authRoutes);

// Sync the models with the database
sequelize
  .sync({ alter: true }) // Sync with database (use force: true to drop and recreate tables in development)
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((error) => {
    console.error("Error synchronizing the database:", error);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
