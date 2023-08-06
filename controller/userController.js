const User = require("../models/userModel");
const { createToken } = require("../auth/userAuth");
// const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { uploadImage } = require("../uploadFile/photoUpload");
// const { baseUrl } = require("../baseUrl/baseUrl");

////////////////
///.............................................
const userSignup = async (req, res) => {
  try {
    let { data } = req.body;

    const user = await User.create({
      email: data.email,
      password: data.password,
    });
    // const token = createToken(userName);

    res.status(200).json({
      message: "Registration Successfull",

      success: true,
    });
  } catch (error) {
    return res.status(401).json({ error: error.message, success: false });
    // console.log(error);
  }
};

// get all user
const getAllUser = async (req, res) => {
  try {
    const transferProduct = await User.find({}).sort({
      createdAt: -1,
    });
    if (!transferProduct) {
      return res
        .status(201)
        .json({ message: "No Product Found", success: false });
    }
    res.status(200).json({ transferProduct, success: true });
  } catch (error) {
    return res.status(404).json({ error: error.message, success: false });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete({ _id: id });
    if (!user) {
      return res
        .status(201)
        .json({ message: "No Such user found", success: false });
    }

    res.status(200).json({ message: "user deleted", success: true });
  } catch (error) {
    return res.status(404).json({ error: error.message, success: false });
  }
};

const uploadPhoto = async (req, res) => {
  console.log(req.files.file);
  try {
    const images = req.files.file;

    let uploadPath;
    if (req.files.file) {
      uploadPath = await uploadImage(images);
    } else {
      return res
        .status(201)
        .json({ message: "No Photo Found", success: false });
    }

    return res.status(200).json({
      message: "image added Successfull",
      uploadPath,

      success: true,
    });
  } catch (error) {
    return res.status(404).json({ error: error.message, success: false });
  }
};

module.exports = {
  uploadPhoto,
  userSignup,
  getAllUser,
  deleteUser,
};
