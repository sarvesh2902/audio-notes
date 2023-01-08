const express = require("express");
const router = express.Router();

const audioPlayerController = require("../controllers/audioPlayer.controllers");

router.post("/provide-audio", audioPlayerController.provideAudioTags);

router.post("/crud-audiotag", audioPlayerController.crudAudioTags);

router.post("/delete-project", audioPlayerController.deleteProject);

router.post("/edit-project", audioPlayerController.editProject);

// router.post("/edit-audiotag", audioPlayerController.editAudioTags);

// router.post("/delete-audiotag", audioPlayerController.deleteAudioTags);

module.exports = router;
