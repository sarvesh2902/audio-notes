const express = require("express");
const router = express.Router();
const multer = require("multer")
const { convertVideoToAudio } = require("../controllers/main.controllers");
const fs = require("fs")
const path = require('path');



const dir = "public"
const subDir = "public/uploads"

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
    // why both are same? because subDir is "public/uploads"
    fs.mkdirSync(subDir)
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, subDir)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

router.post("/convert_video",upload.single("file"), convertVideoToAudio);

module.exports = router;