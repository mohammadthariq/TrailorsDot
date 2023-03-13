const List = require("../../models/ListModel/index");

//Create

const create = (req, res, next) => {
  let listbanner = new List({
    title: req.body.title,
    views: req.body.views,
    genre: req.body.genre,
    description: req.body.description,
    mediaUrl: req.body.url,
    cast: req.body.cast,
    publicer: req.body.publicer,
  });
  if (req.file) {
    listbanner.thumb = req.file.path;
  }
  listbanner
    .save()
    .then((response) => {
      res.json({
        message: "List Created Successfully",
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
  List.find()
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
  const listID = req.body.listID;
  List.findById(listID)
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
  let listID = req.body.listID;

  let updatedata = {
    title: req.body.title,
    views: req.body.views,
    genre: req.body.genre,
    description: req.body.description,
    mediaUrl: req.body.url,
  };
  if (req.file) {
    updatedata.thumb = req.file.path;
  }
  List.findByIdAndUpdate(listID, { $set: updatedata })
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
  let listID = req.body.listID;
  List.findByIdAndRemove(listID)
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
