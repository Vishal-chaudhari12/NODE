const express = require("express");
const {
  getUsers,
  createUser,
  UpdateUser,
  deleteUser,
  getUserById,
} = require("./user.controller");
const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.put("/:userId", UpdateUser);

router.delete("/:userId", deleteUser);

router.get("/:userId", getUserById);

module.exports = router;
