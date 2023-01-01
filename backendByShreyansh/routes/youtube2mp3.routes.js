const express = require("express");
const router = express.Router();

const youtube2mp3Controller = require("../controllers/youtube2mp3.controllers");


router.post("/convert-mp3", youtube2mp3Controller.convertYoutubeIDtoMp3Link);

module.exports = router;