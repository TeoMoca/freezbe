import dotenv from "dotenv";
import mssql from "mssql";

dotenv.config();

export const getConnection = async () => {
  try {
    const sqlConnection = await mssql.connect({
      user: "WebApp",
      password: "PSWhst76000$",
      database: "FREEZBEE",
      server: "10.10.0.205\\FREEZBEE_DB",
      options: {
        encrypt: false,
      },
    });
    console.log("Connection has been established successfully.");
    return sqlConnection;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// try {
//   const connexion = await mssql.connect({
//     user: "test",
//     password: "PSWcesi76000$",
//     database: "master",
//     server: "10.10.0.205\\FREEZBEE_DB",
//     options: {
//       encrypt: false,
//     },
//   });

//   console.log("SUCESS", connexion);
// } catch {
//   console.log("FAILED");
// }

// {
//   dialect: "mssql",
//   dialectOptions: {
//     instanceName: "FREEZBEE_DB",
//     trustedConnection: true,
//   },
//   host: process.env.SQL_HOST,
//   database: process.env.SQL_DB,
//   username: process.env.SQL_USER,
//   server: "SRV-BDD\\FREEZBEE_DB",
// }
