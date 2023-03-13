const express = require("express");
const router = express.Router();
const BannerController = require("../controller/BannerController/index");
const upload = require("../middleware/uploads");

router.get("/banners", BannerController.get);
router.post("/banner/create", upload.single("thumb"), BannerController.create);
router.post("/banner/getbyid", BannerController.getByID);
router.post("/banner/update", upload.single("thumb"), BannerController.update);
router.post("/banner/delete", BannerController.destroy);
module.exports = router;
