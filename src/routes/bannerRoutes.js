const express = require("express");
const router = express.Router();
const BannerController = require("../controller/BannerController/index");
const upload = require("../middleware/uploads");

router.post("/bannercreate", upload.single("thumb"), BannerController.create);
router.get("/", BannerController.get);
router.post("/getbannerbyid", BannerController.getByID);
router.post("/bannerupdate", upload.single("thumb"), BannerController.update);
router.post("/bannerdelete", BannerController.destroy);
module.exports = router;
