import express from "express";
import mssql from "mssql";

export const modelesRouter = express.Router();

modelesRouter.get("/test", (req, res) => {
  res.status(200).json({
    message: "received modele",
  });
});
