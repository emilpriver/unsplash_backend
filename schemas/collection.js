const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CollectionSchema = new Schema(
  {
    collection_id: { type: String, required: true, unique: false },
    user: { type: String, required: true, unique: false},
  },
  { timestamps: true }
);

const Collection = mongoose.model("Collections", CollectionSchema);

module.exports = Collection;
