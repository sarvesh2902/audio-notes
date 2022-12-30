const express = require("express")
const fs = require("fs")
const { exec } = require("child_process")
const AudioUrlRecordSchema = require('../models/AudioUrlRecord')




// single("file") => "file" came from name attribute of the html input form
exports.convertVideoToAudio= async (req, res) => {
    if (req.file) {
        console.log(req.file.path);
        const dirName = "public/audio/"
        const fileName = Date.now() + "-" + "convertedAudio.mp3"
        const output = dirName + fileName;

        exec(`ffmpeg -i ${req.file.path} ${output}`, async(error, stdout, stderr) => {
            if (error) {
                console.log(`Convert Error: ${error}`);
                return
            } else {
                console.log("File is converted");
                const recordPresent = await AudioUrlRecordSchema.findOne({"email":req.body.email});
                if(recordPresent){
                  recordPresent.record.push(fileName);
                  const updateRecord = await AudioUrlRecordSchema.findOneAndUpdate({"email":req.body.email},{"record": recordPresent.record,"updatedAt":Date.now()})

                  if(updateRecord){

                    res.status(200).json({
                      "type":"success",
                      "url":fileName,
                      "updatedRecord": recordPresent.record
                    })

                    fs.unlinkSync(req.file.path)
                  }
                }else{
                  const newRecord = {
                    "email":req.body.email,
                    "record":[fileName],
                    "updatedAt": Date.now()
                  }

                  const newUrl = await AudioUrlRecordSchema.create(newRecord);

                  if(newUrl){
                    res.status(200).json({
                      "type":"success",
                      "url":fileName,
                      "updatedRecord": newUrl.record
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




