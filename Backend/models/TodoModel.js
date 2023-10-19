import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Todo = db.define("todos", {
  title: {
    type: DataTypes.STRING,
  },
  description: DataTypes.TEXT,
  tipe: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Todo;

(async () => {
  await db.sync();
})();
