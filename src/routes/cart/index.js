const router = require("express").Router();

const {
  getCartItems,
  addItemToCart,
  removeItemFromCart,
} = require("../../controllers/cart");

router.get("/", getCartItems);
router.post("/add", addItemToCart);
router.delete("/remove", removeItemFromCart);

module.exports = router;
