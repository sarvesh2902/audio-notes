const multer = require('multer')

exports.UploadImage = async(productPictures) => {
  var url;
    console.log(productPictures);
    const data = new FormData();
    data.append("file", productPictures);
    data.append("upload_preset", "video_to_audio");
    data.append("cloud_name", "dz1vxdivr");
   await  fetch("  https://api.cloudinary.com/v1_1/dz1vxdivr/audio/upload", {
      method: "post",
      body: data
    })
      .then(resp => resp.json())
      .then(data => {
        url = data.url;
        console.log(data);
      })
      .catch(err => console.log(err))
      return url;

  }
  // var arr = [];
  // for (let pic of productPictures) {
  //   console.log("productPictures");
  //   console.log(pic);
  //   // setImage(pic);
  //   await uploadImage(pic);
  //   console.log(url);
  //   arr.push(url)
  // }
  // console.log(arr);
// };



exports.UploadAudio =  async (req, res) => {
  // Get the file name and extension with multer
  const storage = multer.diskStorage({
    filename: (req, file, cb) => {
      const fileExt = file.originalname.split(".").pop();
      const filename = `${new Date().getTime()}.${fileExt}`;
      cb(null, filename);
    },
  });

  // Filter the file to validate if it meets the required audio extension
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "audio/mp3" || file.mimetype === "audio/mpeg") {
      cb(null, true);
    } else {
      cb(
        {
          message: "Unsupported File Format",
        },
        false
      );
    }
  };

  // Set the storage, file filter and file size with multer
  const upload = multer({
    storage,
    // limits: {
    //   fieldNameSize: 200,
    //   fileSize: 5 * 1024 * 1024,
    // },
    fileFilter,
  }).single("audio");

  // upload to cloudinary
  upload(req, res, (err) => {
    if (err) {
      return res.send(err);
    }

    // SEND FILE TO CLOUDINARY
    cloudinary.config({
      cloud_name: "dz1vxdivr",
      api_key: "871672174724731",
      api_secret: "3bBSQ4za77vbfYvtxUn5Siiau0A",
    });
    const { path } = req.file; // file becomes available in req at this point

    const fName = req.file.originalname.split(".")[0];
    cloudinary.uploader.upload(
      path,
      {
        resource_type: "raw",
        public_id: `AudioUploads/${fName}`,
      },

      // Send cloudinary response or catch error
      (err, audio) => {
        if (err) return res.send(err);

        fs.unlinkSync(path);
        res.send(audio);
      }
    );
  });
});



// export default UploadImage;
// <div>
//       <div>
//         <input
//           type="file"
//           name="productPicture"
//           onChange={handleProductPictures}
//         />
//         <input
//           type="file"
//           name="productPicture"
//           onChange={handleProductPictures}
//         />
//         <input
//           type="file"
//           name="productPicture"
//           onChange={handleProductPictures}
//         />
//         <button onClick={uploadImages}>Upload</button>
//       </div>
//       <div>
//         <h1>Uploaded image will be displayed here</h1>
//         {/* <img src={url} alt='' /> */}
//       </div>
//     </div>