import express from "express";

export const ingredientsRouter = express.Router();

ingredientsRouter.get("/test", (req, res) => {
  res.status(200).json({
    message: "received ingredient",
  });
});

// ingredientsRouter.get("/all", (req, res) => {
//   sequelize
//     .model("Ingredients")
//     .findAll()
//     .then((response: Array<any>) =>
//       res.status(200).json({
//         message: "received ingredient",
//         data: response,
//       })
//     );
// });

// ingredientsRouter.post("/add", (req, res) => {
//   const { nom, description } = req.body;
//   console.log(nom, "description", description);
//   mssql.query`Insert into Ingredients(nom, description) values (${nom}, ${description})`.then(
//     (result) => res.json(result)
//   );
// });

// ingredientsRouter.delete("/delete/:ingredient_id", (req, res) => {
//   mssql.query`Select * from Ingredients where id=${req.params.ingredient_id}`.then(
//     (result) => {
//       if (result.recordset.length != 0) {
//         mssql.query`Delete from Ingredients where id=${req.params.ingredient_id}`.then(
//           (result) => res.json(result)
//         );
//       } else {
//         res.status(400).json({
//           message: "Cannot delete not existing ingredient!",
//         });
//       }
//     }
//   );
// });
