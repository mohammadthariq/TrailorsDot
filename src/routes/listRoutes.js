const express = require("express");
const router = express.Router();
const ListController = require("../controller/ListController/index");
const upload = require("../middleware/uploads");

router.get("/lists", ListController.get);
router.post("/list/create", upload.single("thumb"), ListController.create);
router.post("/list/getbyid", ListController.getByID);
router.post("/list/update", upload.single("thumb"), ListController.update);
router.post("/list/delete", ListController.destroy);
module.exports = router;
