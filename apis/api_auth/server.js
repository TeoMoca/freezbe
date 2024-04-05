import { loginRouter } from "./router.js";
import mssql from "mssql";
import express from "express";

const app = express();
app.use(express.json());
app.use("/auth", loginRouter);

await mssql.connect({
  user: "WebApp",
  password: "PSWhst76000$",
  database: "FREEZBEE",
  server: "10.10.0.205\\FREEZBEE_DB",
  options: {
    encrypt: false,
  },
});

app.listen(8080, () => {
  console.log("server is running on port 8080.");
});
