import { User } from "../models/userModel"; // Import the user model

export class UserService {
  // Get user by ID
  static async getUserById(userId: string): Promise<User | null> {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  // Update user data
  static async updateUser(
    userId: string,
    updateData: Partial<User>
  ): Promise<User> {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error("User not found");
    }

    // Update user with new data
    await user.update(updateData);

    return user;
  }

  // Delete a user
  static async deleteUser(userId: string): Promise<void> {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error("User not found");
    }

    // Delete the user from the database
    await user.destroy();
  }
}
