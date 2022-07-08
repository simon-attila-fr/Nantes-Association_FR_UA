const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "public/assets/images" });
const { PhotoController } = require("../controllers");

const router = express.Router();

router.get("/:id", PhotoController.read);
router.put("/upload/:id", upload.single("myfile"), PhotoController.edit);

module.exports = router;
