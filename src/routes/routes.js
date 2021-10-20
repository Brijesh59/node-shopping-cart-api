const router = require("express").Router();
const routes = require("./index");

router.use("/auth", routes.auth);
router.use("/cart", routes.cart);

module.exports = router;
