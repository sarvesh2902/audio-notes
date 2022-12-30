


exports.audioPlayerController = async(req,res,next){
  if(req.body.url){
    res.status(200).json({
      "msg":"development in progress....."
    })
  }
}