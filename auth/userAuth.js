const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//function for creating user token
const createToken = (userName) => {
  return jwt.sign({ userName }, process.env.JWT_SECRET);
};

module.exports = {
  createToken,
};
