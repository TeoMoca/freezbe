import { ingredientsRouter } from "./router.js";
import mssql from "mssql";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/ingredients", ingredientsRouter);

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

await mssql.connect({
  user: "WebApp",
  password: "PSWhst76000$",
  database: "FREEZBEE",
  server: "10.10.0.205\\FREEZBEE_DB",
  options: {
    encrypt: false,
  },
});

// .then(() => {
app.listen(8080, () => {
  console.log("server is running on port 8080.");
});
// });
