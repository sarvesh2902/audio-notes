const passport = require('passport');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs')
const UserSchema = require('../models/UserSchema');
const Cryptr = require('cryptr');
const nodemailer = require('nodemailer')


const cryptr = new Cryptr('myNameisAtlantis');

exports.addUserData = async (req, res, next) => {
  // console.log(req.session.user)
    // if user already exists
    const user = await UserSchema.findOne({ email: req.body.email });

    if (user) return res.status(400).send("User already exists");

    // 1. validate
    // if(req.body.password!=req.body.confirmpassword){
    //   return res.status(400).send("Password not matched")
    // }
    // 2. password hash

    let paswrdHash = await bcryptjs.hash(req.body.password, 10)

    //crypting password
    const crytedPassword = cryptr.encrypt(req.body.password)

    const newData = {
      "name": req.body.name,
      "email": req.body.email,
      "password": paswrdHash,
      "dummy": crytedPassword,
    };


    const addedUser = await UserSchema.create(newData);
    if(addedUser){
      req.session.user = addedUser;
      // res.status(200).redirect('/')
       return res.status(201).json({
        "type":"success",
        "msg":addedUser
      })
    }else{
       return res.status(401).json({
        "type": "failure",
        "msg": "User not added"
      })
    }

    // 3. data base add kardo
    // 4. render
    // return;

  }

exports.loginUserData = async(req, res,next) => {
  const data = await UserSchema.findOne({"email":req.body.email});

  if(data){
      const passwordResult = await bcryptjs.compare(req.body.password, data.password)
      if(passwordResult){
              req.session.user = data;
              // res.status(200).redirect('/account/dashboard')

              res.status(200).json({
                "type":"success",
                "msg":data
              })
      }else{
          return res.status(401).json({
              "type":"failure",
              "msg":"Plz enter correct password",
          })
      }
  }else{
      return res.status(401).json({
          "type":"failure",
          "msg":"user not found",
      })
  }
}

exports.generateOtp = async(req,res,next)=>{
  try {
    UserSchema.findOne({ email: req.body.email })
      .exec((error, user) => {
        if (!user&&error) return res.status(400).json({
          message: "User Not Exist"
        });
      });
    const { email } = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000);
    // req.session.otp = otp;
    // Send OTP via email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'singhssingh152@gmail.com',
        pass: 'chxdxdhlfqzzhhev'
      }
    });
    const mailOptions = {
      from: 'singhssingh152@gmail.com',
      to: email,
      subject: 'OTP for password reset',
      text: `Your OTP is: ${otp}`
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({otp, message: 'OTP sent successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).send({error});
  }
}

 exports.verifyOTP = async (req, res) => {
  try {
    const { otp } = req.body;
    if (!otp || otp !== req.body.trueOtp) {
      return res.status(401).send('Invalid OTP');
    }
    res.status(200).send('OTP verified');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error verifying OTP');
  }
}


exports.resetPassword =  async (req, res) => {
  try {
    User.findOne({ email: req.body.email })
      .exec((error, user) => {
        if (!user&&error) return res.status(400).json({
          message: "User Not Exist"
        });
      });
    // if (!req.session.otp) {
    //   return res.status(401).send('OTP not verified');
    // }
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.findOneAndUpdate({email: req.body.email}, { password: hashedPassword });
    // req.session.otp = null;
    res.send('Password reset successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error resetting password');
  }
};



