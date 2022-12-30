const express = require("express")
const fs = require("fs")
const { exec } = require("child_process")




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
                console.log(typeof output);

                res.download(output, (error) => {
                    if (error) {
                        throw error
                    } else {
                        fs.unlinkSync(req.file.path)
                    }
                })
            }
        })
    }
}


