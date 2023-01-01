const AudioUrlRecordSchema = require('../models/AudioUrlRecord')

exports.provideUsersAllRecord = async(req,res,next)=>{
    if(req.body.email){
        const data = await AudioUrlRecordSchema.findOne({"email":req.body.email});

        if(data){
          res.status(200).json({
            "type":"success",
            "message":data.record
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