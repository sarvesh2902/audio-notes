const express = require("express");
const fs = require("fs");
const { exec } = require("child_process");
// const AudioUrlRecordSchema = require('../models/AudioUrlRecord')
const AudioTagSchema = require("../models/AudioTagSchema");
const { getVideoDurationInSeconds } = require("get-video-duration");

// single("file") => "file" came from name attribute of the html input form
exports.convertVideoToAudio = async (req, res) => {
  if (req.file) {
    console.log(req.file.path);

    // converting to video to .mp4
    var convertedFileName = "public/audio/"+Date.now()+"-convertedVideo.mp4"
    exec(`ffmpeg -i ${req.file.path} -c:v libx264 ${convertedFileName}`, async(error, stdout, stderr) => {
      if (error) {
          console.log(`Convert Error: ${error}`);
          return
      } else{
        console.log("converted video to .mp4");
        req.file.path = convertedFileName
        const dirName = "public/audio/";
        const fileName = Date.now() + "-" + "convertedAudio.mp3";
        const output = dirName + fileName;
        // From a local path...
        const duration = await getVideoDurationInSeconds(req.file.path);



        console.log(duration);

        const { spawn } = require("child_process");

        const ffmpeg = spawn("ffmpeg", [
          "-i",
          req.file.path,
          "-vn",
          "-acodec",
          "libmp3lame",
          "-ac",
          "2",
          "-ab",
          "192k",
          "-ar",
          "44100",
          output,
        ]);

        ffmpeg.on("exit", async function (code) {
          if (code == 1) {
            res.status(401).json({
              type: "failure",
              msg: "Provided video is not proper, its causing some error...",
            });
          }
          console.log("conversion complete with code: " + code);

          const newObject = {
            url: fileName,
            email: req.body.email,
            projectName: req.body.projectName,
            tags: [],
            createdAt: Date.now(),
            updatedAt: Date.now(),
            duration: {
              min: Math.floor(duration / 60),
              sec: Math.floor(duration % 60),
            },
          };

          const addNewProject = await AudioTagSchema.create(newObject);

          if (addNewProject) {
            res.status(200).json({
              type: "success",
              msg: newObject,
            });
            fs.unlinkSync(req.file.path);
          } else {
            res.status(401).json({
              type: "failure",
              msg: "Data not added to Database ...",
            });
            fs.unlinkSync(req.file.path);
          }

          // const recordPresent = await AudioTagSchema.find({ "email": req.body.email });
          // if (recordPresent) {
          //   var newObj = { "projectName":req.body.projectName,
          //                  "url": fileName,
          //                  "createdDate":Date.now()}
          //   recordPresent.record.push(newObj);
          //   const updateRecord = await AudioUrlRecordSchema.findOneAndUpdate({ "email": req.body.email }, { "record": recordPresent.record, "updatedAt": Date.now() })

          //   if (updateRecord) {

          //     const addedDummyTag = await AudioTagSchema.create({"url":fileName,"projectName":req.body.projectName,"tags":[],"createdAt":Date.now(),"updatedAt":Date.now()});

          //     console.log(addedDummyTag)

          //     if(addedDummyTag){
          //         console.log("dummy tag added");
          //     }
          //     res.status(200).json({
          //       "type": "success",
          //       "latestRecord":{ "projectName":req.body.projectName,
          //       "url": fileName,"tags":[]},
          //       "updatedRecord": recordPresent.record
          //     })

          //     fs.unlinkSync(req.file.path)
          //   }
          // } else {
          //   const newRecord = {
          //     "email": req.body.email,
          //     "record": [{ "projectName":req.body.projectName,
          //     "url": fileName,
          //     "createdDate":Date.now()}],
          //     "updatedAt": Date.now()
          //   }

          //   const newUrl = await AudioUrlRecordSchema.create(newRecord);

          //   if (newUrl) {
          //     const addedDummyTag = await AudioTagSchema.create({"url":fileName,"projectName":req.body.projectName,"tags":[],"createdAt":Date.now(),"updatedAt":Date.now()});

          //     console.log(addedDummyTag)
          //     if(addedDummyTag){
          //         console.log("dummy tag added");
          //     }

          //     res.status(200).json({
          //       "type": "success",
          //       "latestRecord":{ "projectName":req.body.projectName,
          //       "url": fileName},
          //       "updatedRecord": newUrl.record
          //     })

          //     fs.unlinkSync(req.file.path)
          //   }
          // }
          // res.download(output, (error) => {
          //     if (error) {
          //         throw error
          //     } else {
          //         fs.unlinkSync(req.file.path)
          //     }
          // })
          // });

          // exec(`ffmpeg -i ${req.file.path} ${output}`, async(error, stdout, stderr) => {
          //     if (error) {
          //         console.log(`Convert Error: ${error}`);
          //         return
          //     } else {
          //         console.log("File is converted");
          //         const recordPresent = await AudioUrlRecordSchema.findOne({"email":req.body.email});
          //         if(recordPresent){
          //           recordPresent.record.push(fileName);
          //           const updateRecord = await AudioUrlRecordSchema.findOneAndUpdate({"email":req.body.email},{"record": recordPresent.record,"updatedAt":Date.now()})

          //           if(updateRecord){

          //             res.status(200).json({
          //               "type":"success",
          //               "url":fileName,
          //               "updatedRecord": recordPresent.record
          //             })

          //             fs.unlinkSync(req.file.path)
          //           }
          //         }else{
          //           const newRecord = {
          //             "email":req.body.email,
          //             "record":[fileName],
          //             "updatedAt": Date.now()
          //           }

          //           const newUrl = await AudioUrlRecordSchema.create(newRecord);

          //           if(newUrl){
          //             res.status(200).json({
          //               "type":"success",
          //               "url":fileName,
          //               "updatedRecord": newUrl.record
          //             })

          //             fs.unlinkSync(req.file.path)
          //           }
          //         }
          //         // res.download(output, (error) => {
          //         //     if (error) {
          //         //         throw error
          //         //     } else {
          //         //         fs.unlinkSync(req.file.path)
          //         //     }
          //         // })
          //     }
        });
      }
    }
    )


  }
};
