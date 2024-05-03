const express = require("express");
const userController = require("../controller/user");

const router = express.Router();

router
  .post("/", userController.createUser)
  .get("/", userController.allUsers)
  .get("/:id", userController.getUser)
  .put("/:id", userController.updateUser)
  .patch("/:id", userController.replaceUser)
  .delete("/:id", userController.deleteUser);

exports.router = router;
