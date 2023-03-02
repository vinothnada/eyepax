const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const photoSchema = new Schema({
  title: String,
  subTitle: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Photo", photoSchema);