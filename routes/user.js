const express = require("express");
const router = express.Router();
// const upload = require("../helper/upload");

const checkAuth = require("../middleware/checkAuth");

const { userSignup, getAllUser, deleteUser ,uploadPhoto } = require("../controller/userController");

router.post("/register", userSignup);
router.get("/get",checkAuth, getAllUser);
router.delete("/delete/:id", deleteUser);
router.post("/upload", uploadPhoto);

module.exports = router;
