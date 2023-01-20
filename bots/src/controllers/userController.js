const users = require("../models/userModel.js");

exports.createUser = async function (_, response) {
  await users.create();
  response.send(users.getAll());
};

exports.getUsers = function (_, response) {
  response.send(users.getAll());
};

exports.removeUser = function (request, response) {
  if (!request.body) return response.sendStatus(400);
  users.remove(request.body.id);
  response.send(users.getAll());
};
