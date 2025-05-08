const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [2, "first name is too short"],
      maxLength: 50,
    },

    emailId: {
      type: String,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid email id");
        }
      },
      required: true,
      unique: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(value)) {
          throw new Error("invalid phone number");
        }
      }
    },
    password: {
      type: String,
      required: true,
    },



  },
  { timestamps: true }
);

userSchema.methods.getJWT = async function () {
  const user = this;

  const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60,
  });

  return token;
};

userSchema.methods.verifyPassword = async function (userPassword) {
  const user = this;

  const isVerified = await bcrypt.compare(userPassword, user.password);

  return isVerified;
};

module.exports = mongoose.model("User", userSchema);
