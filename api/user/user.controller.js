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
  UserModel.findByIdAndUpdate(req.params.userId, {
    firstName: req.body.firstName,
  }).then((result) => {
    res.status(202).json({
      message: "User Updated",
    });
  });
};

const deleteUser = async (req, res, next) => {
  try {
    const result = await UserModel.findByIdAndDelete(req.params.userId);
    res.status(200).json({
      message: "User Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getUserById = (req, res, next) => {};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
  UpdateUser,
};
