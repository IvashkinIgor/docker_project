const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const names = ["Venera", "Gorn", "Fill", "Rock", "Masha"];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

app.get("/generate", function (request, response) {
  response.send({
    id: getRandomArbitrary(1, 1000),
    name: names[getRandomArbitrary(0, 4)],
    age: getRandomArbitrary(18, 99),
  });
});

app.listen(8001, "0.0.0.0", () =>
  console.log("Сервер запущен и ожидает подключения...")
);
