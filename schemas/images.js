const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
  {
    image_id: { type: String, required: true, unique: false },
    user: { type: String, required: true, unique: false},
  },
  { timestamps: true }
);

const Images = mongoose.model("Images", ImageSchema);

module.exports = Images;
