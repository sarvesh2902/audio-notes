const AudioTagSchema = require('../models/AudioTagSchema')

exports.provideUsersAllRecord = async(req,res,next)=>{
    if(req.body.email){
        const data = await AudioTagSchema.find({"email":req.body.email});

        if(data.length){
          res.status(200).json({
            "type":"success",
            "message":data
          })
        }else{
          res.status(401).json({
            "type":"failure",
            "message":"Data not found!"
          })
        }
    }else{
      res.status(401).json({
        "type":"failure",
        "message":"Please provide email"
      })
    }
}
