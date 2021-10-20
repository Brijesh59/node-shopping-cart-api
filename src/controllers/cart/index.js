const { User, Cart } = require("../../models");

exports.getCartItems = async (req, res, next) => {
  try {
    return res
      .status(201)
      .json({ data: [], message: "cart items fetched successfully" });
  } catch (error) {
    next(error);
  }
};

exports.addItemToCart = async (req, res, next) => {
  try {
    return res
      .status(201)
      .json({ data: {}, message: "item addedd successfully" });
  } catch (error) {
    next(error);
  }
};

exports.removeItemFromCart = async (req, res, next) => {
  try {
    return res
      .status(201)
      .json({ data: {}, message: "item removed successfully" });
  } catch (error) {
    next(error);
  }
};
