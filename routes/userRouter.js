const { Router } = require("express");
const {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteUsernamesGet,
} = require("../controllers/userController");

const userRouter = new Router();

userRouter.get("/", getUsernames);
userRouter.get("/new", createUsernameGet);
userRouter.post("/new", createUsernamePost);
userRouter.get("/delete", deleteUsernamesGet);

module.exports = userRouter;
