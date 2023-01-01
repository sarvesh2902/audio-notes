const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboard.controllers");


router.post("/provide-all-record", dashboardController.provideUsersAllRecord);

module.exports = router;