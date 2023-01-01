const fetch = require("node-fetch");
const request = require('request');
const AudioUrlRecordSchema = require('../models/AudioUrlRecord')



exports.convertYoutubeIDtoMp3Link = async (req, res, next) => {

  const videoId = req.body.videoId;
  console.log(req.body.videoId)

  if (
    videoId === undefined ||
    videoId === "" ||
    videoId === null
  ) {
    return res.json( { success: false, message: "Please enter a video ID" });
  } else {

    const fetchAPI = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": process.env.API_HOST
      }
    });

    const fetchResponse = await fetchAPI.json();

    if (fetchResponse.status === "ok") {
      console.log(fetchResponse)

      const recordPresent = await AudioUrlRecordSchema.findOne({ "email": req.body.email });

      if (recordPresent) {
        recordPresent.record.push(fetchResponse.link);
        const updateRecord = await AudioUrlRecordSchema.findOneAndUpdate({ "email": req.body.email }, { "record": recordPresent.record, "updatedAt": Date.now() })

        if (updateRecord) {

          res.status(200).json({
            "type": "success",
            "url": fetchResponse,
            "updatedRecord": recordPresent.record
          })

        }
      } else {
        const newRecord = {
          "email": req.body.email,
          "record": [fetchResponse.link],
          "updatedAt": Date.now()
        }

        const newUrl = await AudioUrlRecordSchema.create(newRecord);

        if (newUrl) {
          res.status(200).json({
            "type": "success",
            "url": fetchResponse.link,
            "updatedRecord": newUrl.record
          })
        }
      }
      // return res.render("index", { success: true, song_title: fetchResponse.title, song_link: fetchResponse.link })
    }
    else
      return res.status(401).json({ success: false, message: fetchResponse.msg });
  }
};