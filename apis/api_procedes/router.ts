import express from "express";
import mssql from "mssql";

export const procedesRouter = express.Router();

procedesRouter.get("/test", (req, res) => {
  res.status(200).json({
    message: "received procede",
  });
});

procedesRouter.post("/add", (req, res) => {
  const { name, description, freezbee_model, steps } = req.body;

  if (!name || !description || !freezbee_model || !steps) {
    res.status(400).json({
      message: "One on the fields is not correct",
    });
  }

  res.status(200).json({
    data: {
      name: "a",
    },
  });
});

procedesRouter.put("/modify", (req, res) => {
  const { a, b } = req.body;
  res.status(200).json({
    data: {
      name: "a",
    },
  });
});

procedesRouter.delete("/delete/:procede_id", (req, res) => {
  const procede_id = req.params.procede_id;
  if (!procede_id) {
    res.status(400).json({
      message: "Cannot find a procede with this ID",
    });
  }

  res.status(200).json({
    data: {
      name: "a",
    },
  });
});

procedesRouter.get("/all", (req, res) => {
  res.status(200).json({
    data: {
      name: "a",
    },
  });
});
