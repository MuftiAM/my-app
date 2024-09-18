import { Request, Response } from "express";
import { UserService } from "../services/userService";

export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    // Call the UserService to retrieve user data
    const user = await UserService.getUserById(userId);

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    const err = error as Error; // Cast error to Error type
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const updateData = req.body;

  try {
    // Call the UserService to update the user
    const updatedUser = await UserService.updateUser(userId, updateData);

    return res.status(200).json(updatedUser);
  } catch (error) {
    const err = error as Error; // Cast error to Error type
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
