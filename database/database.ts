import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("FREEZBEE", "WebApp", "PSWhst76000$", {
  host: "10.10.0.205\\FREEZBEE_DB",
  dialect: "mssql",
});
