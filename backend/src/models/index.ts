import User from "./userModel";
import Post from "./postModel";

// If there are any model associations, they should be initialized here
// For example: User.hasMany(Post), Post.belongsTo(User)

const initModels = () => {
  // Define model relationships
  User.hasMany(Post, { foreignKey: "userId", as: "posts" });
  Post.belongsTo(User, { foreignKey: "userId", as: "author" });
};

export { User, Post, initModels };
