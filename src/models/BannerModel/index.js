const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bannerSchema = new Schema(
  {
    name: {
      type: String,
    },
    thumb: {
      type: String,
    },
    views: {
      type: Number,
    },
    description: {
      type: String,
    },
    genre: {
      type: String,
    },
    mediaUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const Banners = mongoose.model("banner", bannerSchema);
module.exports = Banners;
