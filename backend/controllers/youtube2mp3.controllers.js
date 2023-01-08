const fetch = require("node-fetch");
const request = require('request');
const AudioUrlRecordSchema = require('../models/AudioUrlRecord')
const AudioTagSchema = require('../models/AudioTagSchema')



exports.convertYoutubeIDtoMp3Link = async (req, res, next) => {
  const videoId = req.body.videoId;
  console.log(req.body);

  if (videoId === undefined || videoId === "" || videoId === null) {
    return res.json({ success: false, message: "Please enter a video ID" });
  } else {
    const fetchAPI = await fetch(
      `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.API_KEY,
          "x-rapidapi-host": process.env.API_HOST,
        },
      }
    );

    const fetchResponse = await fetchAPI.json();

    if (fetchResponse.status === "ok") {
      console.log(fetchResponse);

      const newObject = {
        "url":fetchResponse.link,
        "email":req.body.email,
        "projectName":req.body.projectName,
        "tags":[],
        "createdAt":Date.now(),
        "updatedAt":Date.now()
    }

    const addNewProject = await AudioTagSchema.create(newObject);

    if(addNewProject){
      res.status(200).json({
        "type":"success",
        "msg":newObject
      })
    }else{
      res.status(401).json({
        "type":"failure",
        "msg":"Data not added to Database ..."
      })
    }

      // const recordPresent = await AudioUrlRecordSchema.findOne({
      //   email: req.body.email,
      // });

      // if (recordPresent) {
      //   var newObj = { "projectName":req.body.projectName,
      //                  "url": fetchResponse.link,
      //                  "createdDate":Date.now()}
      //   recordPresent.record.push(newObj);
      //   const updateRecord = await AudioUrlRecordSchema.findOneAndUpdate(
      //     { email: req.body.email },
      //     { record: recordPresent.record, updatedAt: Date.now() }
      //   );

      //   if (updateRecord) {

      //     const addedDummyTag = await AudioTagSchema.create({"url":fetchResponse.link,"projectName":req.body.projectName,"tags":[],"createdAt":Date.now(),"updatedAt":Date.now()});

      //     if(addedDummyTag){
      //         console.log("dummy tag added");
      //         res.status(200).json({
      //           "type": "success",
      //           "latestRecord": { "projectName":req.body.projectName,
      //           "url": fetchResponse.link  },
      //           "updatedRecord": recordPresent.record
      //         })
      //     }



      //   }
      // } else {
      //   const newRecord = {
      //     "email": req.body.email,
      //     "record": [{ "projectName":req.body.projectName,
      //     "url": fetchResponse.link,
      //     "createdDate":Date.now()}],
      //     "updatedAt": Date.now()
      //   }

      //   const newUrl = await AudioUrlRecordSchema.create(newRecord);

      //   if (newUrl) {
      //     const addedDummyTag = await AudioTagSchema.create({"url":fetchResponse.link,"projectName":req.body.projectName,"tags":[],"createdAt":Date.now(),"updatedAt":Date.now()});

      //     if(addedDummyTag){
      //         console.log("dummy tag added");
      //     }

      //     res.status(200).json({
      //       type: "success",
      //       latestRecord: {
      //         projectName: req.body.projectName,
      //         url: fetchResponse.link,
      //       },
      //       updatedRecord: newUrl.record,
      //     });
      //   }
      // }
      // return res.render("index", { success: true, song_title: fetchResponse.title, song_link: fetchResponse.link })
    } else
      return res
        .status(401)
        .json({ success: false, message: fetchResponse.msg });
  }
};
