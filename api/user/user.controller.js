const { UserModel } = require("./user.model");

const createUser = (req, res, next) => {
  const user = new UserModel({
    firstName: req.body.firstName,
  });

  user
    .save()
    .then((result) => {
      res.status(201).json({
        message: "User Created",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
      });
    });
};

const getUsers = (req, res, next) => {
  UserModel.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json({
        message: "User Not Found",
      });
    });
};

const UpdateUser = (req, res, next) => {
  UserModel.find().then;
};

const deleteUser = (req, res, next) => {};

const getUserById = (req, res, next) => {};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
  UpdateUser,
};
