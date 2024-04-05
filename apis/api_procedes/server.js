import { procedesRouter } from "./router.js";
import express from "express";

const app = express();
app.use(express.json());
app.use("/procedes", procedesRouter);

app.listen(8080, () => {
  console.log("server is running on port 8080.");
});
