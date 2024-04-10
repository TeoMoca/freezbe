import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

export class Ingredients extends Model {}

console.log("je passe la");

Ingredients.init(
  {
    ingredient_id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ingredient_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Ingredients" }
);
