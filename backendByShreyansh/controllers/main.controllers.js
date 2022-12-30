const express = require("express")
const fs = require("fs")
const { exec } = require("child_process")
const AudioUrlRecordSchema = require('../models/AudioUrlRecord')




// single("file") => "file" came from name attribute of the html input form
exports.convertVideoToAudio= async (req, res) => {
    if (req.file) {
        console.log(req.file.path);

        const output = "public/audio/"+Date.now() + "-" + "convertedAudio.mp3"

        exec(`ffmpeg -i ${req.file.path} ${output}`, async(error, stdout, stderr) => {
            if (error) {
                console.log(`Convert Error: ${error}`);
                return
            } else {
                console.log("File is converted");
                const recordPresent = await AudioUrlRecordSchema.findOne({"email":req.body.email});
                if(recordPresent){
                  console.log(recordPresent);
                  console.log(recordPresent.record);
                  recordPresent.record.push(output);
                  console.log(recordPresent.record);
                  const updateRecord = await AudioUrlRecordSchema.findOneAndUpdate({"email":req.body.email},{"record": recordPresent.record,"updatedAt":Date.now()})

                  if(updateRecord){

                    res.status(200).json({
                      "type":"success",
                      "url":output,
                      "updatedRecord": updateRecord
                    })

                    fs.unlinkSync(req.file.path)
                  }
                }else{
                  const newRecord = {
                    "email":req.body.email,
                    "record":[output],
                    "updatedAt": Date.now()
                  }

                  const newUrl = await AudioUrlRecordSchema.create(newRecord);

                  if(newUrl){
                    res.status(200).json({
                      "type":"success",
                      "url":output,
                      "updatedRecord": newUrl
                    })

                    fs.unlinkSync(req.file.path)
                  }
                }
                // res.download(output, (error) => {
                //     if (error) {
                //         throw error
                //     } else {
                //         fs.unlinkSync(req.file.path)
                //     }
                // })
            }
        })
    }
}


