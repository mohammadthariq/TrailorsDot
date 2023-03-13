const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema(
  {
    title: {
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
    cast: {
      actor: String,
      actress: String,
      music: String,
      director: String,
    },

    publicer: {
      type: String,
    },
  },
  { timestamps: true }
);

const List = mongoose.model("lists", ListSchema);
module.exports = List;
