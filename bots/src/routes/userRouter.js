const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();

userRouter.use("/remove", userController.removeUser);
userRouter.use("/create", userController.createUser);
userRouter.use("/all", userController.getUsers);

module.exports = userRouter;
