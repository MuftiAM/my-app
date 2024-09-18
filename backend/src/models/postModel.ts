import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import User from "./userModel"; // Import the User model for associations

interface PostAttributes {
  id: number;
  title: string;
  content: string;
  userId: number;
}

export class Post extends Model<PostAttributes> implements PostAttributes {
  public id!: number;
  public title!: string;
  public content!: string;
  public userId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize the Post model with Sequelize
Post.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "posts",
    timestamps: true,
  }
);

// Set up the relationship: A Post belongs to a User
Post.belongsTo(User, { foreignKey: "userId", as: "author" });

export default Post;
