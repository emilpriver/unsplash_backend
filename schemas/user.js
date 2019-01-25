const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require('moment')

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    signed_up: {type: Date, required: true, default: moment().toISOString()}
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
