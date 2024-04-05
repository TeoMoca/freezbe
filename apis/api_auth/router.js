import express from "express";
import { default as ldap } from "ldapjs";
import jwt from "jsonwebtoken";

export const loginRouter = express.Router();

loginRouter.post("/login", (req, res) => {
  const { username, password } = req.body;
  const client = ldap.createClient({
    url: "ldap://cybersec.adds:389",
    reconnect: true,
  });

  client.bind(username, password, (err) => {
    if (err) {
      res.status(404).json({
        message: err,
      });
    } else {
      const token = jwt.sign({ username }, "passkey", { expiresIn: "2h" });

      res.status(200).json({
        message: "User is logged in",
        data: {
          token,
        },
      });
    }
  });
});

loginRouter.post("/verify", (req, res) => {
  const { token } = req.body;
  try {
    jwt.verify(token, "passkey");
    res.status(200).send({ message: "valid token." });
  } catch (error) {
    return res.status(401).send({ message: "Invalid token." });
  }
});
