const express = require("express");
const registerUser = require("./UesrController");

const router = express.Router();
router.route("/register").post(registerUser)
router.route("/login").get((req, res) => {
    res.send("get requested");
})

module.exports = router;