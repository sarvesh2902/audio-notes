const express = require("express");
const router = express.Router();

const audioPlayerController = require("../controllers/audioPlayer.controllers");


router.post("/provide-audio", dashboardController.audioPlayerController);

module.exports = router;