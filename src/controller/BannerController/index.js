const Banners = require("../../models/BannerModel/index");

//Create

const create = (req, res, next) => {
  let banner = new Banners({
    name: req.body.name,
    views: req.body.views,
    genre: req.body.genre,
    description: req.body.description,
    mediaUrl: req.body.url,
  });
  if (req.file) {
    banner.thumb = req.file.path;
  }
  banner
    .save()
    .then((response) => {
      res.json({
        message: "Banner Created Successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "Error Occured!",
      });
    });
};

//read

const get = (req, res, next) => {
  Banners.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "Error occured!",
      });
    });
};

//read by id
const getByID = (req, res, next) => {
  const bannerID = req.body.bannerID;
  Banners.findById(bannerID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "Error occured!",
      });
    });
};

//update

const update = (req, res, next) => {
  let bannerID = req.body.bannerID;

  let updatedata = {
    name: req.body.name,
    views: req.body.views,
    genre: req.body.genre,
    description: req.body.description,
    mediaUrl: req.body.url,
  };
  if (req.file) {
    updatedata.thumb = req.file.path;
  }
  Banners.findByIdAndUpdate(bannerID, { $set: updatedata })
    .then(() => {
      res.json({
        message: "updated successfully!!!",
      });
    })
    .catch((error) => {
      res.json({
        message: "Error occured!",
      });
    });
};

//delete

const destroy = (req, res, next) => {
  let bannerID = req.body.bannerID;
  Banners.findByIdAndRemove(bannerID)
    .then(() => {
      res.json({
        message: "deleted successfully!!!",
      });
    })
    .catch((error) => {
      res.json({
        message: "Error occured!",
      });
    });
};

module.exports = {
  create,
  get,
  getByID,
  update,
  destroy,
};
