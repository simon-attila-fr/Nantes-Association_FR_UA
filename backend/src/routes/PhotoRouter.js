const express = require("express");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
const { PhotoController } = require("../controllers");

const router = express.Router();

router.get("/:id", PhotoController.read);
router.put("/upload/:id", upload.single("myfile"), PhotoController.edit);

module.exports = router;
