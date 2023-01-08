const AudioTagSchema = require("../models/AudioTagSchema");

exports.provideAudioTags = async (req, res, next) => {
  console.log(req.body.url);
  if (req.body.url) {
    const data = await AudioTagSchema.findOne({ url: req.body.url });

    if (data) {
      res.status(200).json({
        type: "success",
        projectName: data.projectName,
        tags: data.tags,
      });
    } else {
      res.status(401).json({
        type: "failure",
        tags: "No tags Found on provided url",
      });
    }
  } else {
    res.status(401).json({
      type: "failure",
      msg: "Plz provide media url !",
    });
  }
};

exports.crudAudioTags = async (req, res, next) => {
  const data = await AudioTagSchema.findOne({ url: req.body.url });
  if (data) {
    // const timeStamp = req.body.timestamp;
    // const Tag = req.body.tag;
    // let newTag = {};
    // newTag[timeStamp] = Tag;
    // data.tags.push(newTag)

    const updatedData = await AudioTagSchema.findOneAndUpdate(
      { url: req.body.url },
      { tags: req.body.tags }
    );

    if (updatedData) {
      res.status(200).json({
        type: "success",
        updatedTag: data.tags,
      });
    } else {
      res.status(401).json({
        type: "failure",
        updatedTag: "Tag not updated ...",
      });
    }
  } else {
    res.status(401).json({
      type: "failure",
      msg: "No Data found for provided url ...",
    });
  }
};

exports.deleteProject = async (req, res, next) => {
  const data = await AudioTagSchema.findOne({ url: req.body.url });
  if (data) {
    // const timeStamp = req.body.timestamp;
    // const Tag = req.body.tag;
    // let newTag = {};
    // newTag[timeStamp] = Tag;
    // data.tags.push(newTag)

    const updatedData = await AudioTagSchema.findOneAndRemove({
      url: req.body.url,
    });

    if (updatedData) {
      res.status(200).json({
        type: "success",
      });
    } else {
      res.status(401).json({
        type: "failure",
        updatedTag: "Tag not updated ...",
      });
    }
  } else {
    res.status(401).json({
      type: "failure",
      msg: "No Data found for provided url ...",
    });
  }
};

exports.editProject = async (req, res, next) => {
  const data = await AudioTagSchema.findOne({ url: req.body.url });
  if (data) {
    // const timeStamp = req.body.timestamp;
    // const Tag = req.body.tag;
    // let newTag = {};
    // newTag[timeStamp] = Tag;
    // data.tags.push(newTag)

    const updatedData = await AudioTagSchema.findOneAndUpdate(
      { url: req.body.url },
      { projectName: req.body.projectName }
    );

    if (updatedData) {
      res.status(200).json({
        type: "success",
      });
    } else {
      res.status(401).json({
        type: "failure",
        updatedTag: "Tag not updated ...",
      });
    }
  } else {
    res.status(401).json({
      type: "failure",
      msg: "No Data found for provided url ...",
    });
  }
};

// exports.editAudioTags = async(req,res,next)=>{
//     const data = await AudioTagSchema.findOne({"url":req.body.url})
//     if(data){
//       const timeStamp = req.body.timestamp;
//       const Tag = req.body.tag;

//       var arr = [];
//       var newTags = data.tags.map((ele)=>{
//                         if(Object.keys(ele)==timeStamp){
//                           Object.values(ele) = Tag;
//                         }
//                         arr.push(ele)
//                       })

//       const updatedData = await AudioTagSchema.findOneAndUpdate({"url":req.body.url},{"tags":newTags})

//       if(updatedData){
//         res.status(200).json({
//           "type":"success",
//           "updatedTag":newTags
//         })
//       }else{
//         res.status(401).json({
//           "type":"failure",
//           "updatedTag":"Tag not updated ..."
//         })
//       }
//     }else{
//       res.status(401).json({
//         "type":"failure",
//         "msg":"No Data found for provided url ..."
//       })
//     }
// }

// exports.deleteAudioTags = async(req,res,next)=>{
//     const data = await AudioTagSchema.findOne({"url":req.body.url})
//     if(data){
//       const timeStamp = req.body.timestamp;
//       const Tag = req.body.tag;

//       var arr = [];
//       var newTags = data.tags.map((ele)=>{
//                         if(Object.keys(ele)==timeStamp){
//                           Object.values(ele) = Tag;
//                         }else{
//                           arr.push(ele);
//                         }
//                       })

//       const updatedData = await AudioTagSchema.findOneAndUpdate({"url":req.body.url},{"tags":arr})

//       if(updatedData){
//         res.status(200).json({
//           "type":"success",
//           "updatedTag":arr
//         })
//       }else{
//         res.status(401).json({
//           "type":"failure",
//           "updatedTag":"Tag not updated ..."
//         })
//       }
//     }else{
//       res.status(401).json({
//         "type":"failure",
//         "msg":"No Data found for provided url ..."
//       })
//     }
// }
