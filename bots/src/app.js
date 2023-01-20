const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());
app.use(express.json());

const userRouter = require("./routes/userRouter.js");

app.use("/users", userRouter);

app.use(function (req, res, next) {
  res.status(404).send("Not Found");
});

// let users = [];

// app.get("/users/create", async function (request, response) {
//   const res = await axios.get(
//     `http://generator:${process.env.BOT_PORT || 8001}/generate`
//   );
//   users.push(res.data);
//   response.send(users);
// });

// app.get("/users/all", function (request, response) {
//   response.send(users);
// });

// app.post("/users/remove", function (request, response) {
//   if (!request.body) return response.sendStatus(400);
//   const filtred = users.filter((user) => user.id !== request.body.id);
//   users = filtred;
//   response.send(filtred);
// });

app.listen(8081, "0.0.0.0", () =>
  console.log("Сервер запущен и ожидает подключения...")
);
