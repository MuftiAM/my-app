import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel";
import dotenv from "dotenv";

dotenv.config();

export class AuthService {
  // Method for logging in a user
  static async login(email: string, password: string): Promise<string | null> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("User not found");
    }

    // Compare provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1h",
      }
    );

    return token;
  }

  // Method for signing up a user
  static async signup(userData: {
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    const { name, email, password } = userData;

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Hash the user's password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}
