const express = require("express");
const multer = require("multer");
const path = require("path");
const { authorization, isAdmin } = require("../controllers/UserController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
const { PhotoController } = require("../controllers");

const router = express.Router();

router.get("/", PhotoController.browse);
router.get("/:id", PhotoController.read);
router.put(
  "/upload/:id",
  authorization,
  isAdmin,
  upload.single("myfile"),
  PhotoController.edit
);

module.exports = router;
