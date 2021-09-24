const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");
const authToken = require("../../config/auth");

router.post("/signup", usersCtrl.create);
router.post("/login", usersCtrl.login);

router.get("/verify", authToken, usersCtrl.verify);

module.exports = router;
