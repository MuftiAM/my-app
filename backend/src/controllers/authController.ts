import { Request, Response } from "express";
import { AuthService } from "../services/authService";
import { User } from "../models/userModel";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Call the AuthService to authenticate the user
    const token = await AuthService.login(email, password);

    if (token) {
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    const err = error as Error; // Explicitly cast error to Error
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    // Call the AuthService to register the user
    const user = await AuthService.signup({ name, email, password });

    return res.status(201).json({ message: "User created", user });
  } catch (error) {
    const err = error as Error; // Explicitly cast error to Error
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
