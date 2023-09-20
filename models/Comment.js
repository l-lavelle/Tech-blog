const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

// add the rest of the columns
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    blog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "blogs",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
