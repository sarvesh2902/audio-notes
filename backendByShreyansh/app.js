const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const passport = require('passport');
const {initializingPassport }=require('./handlers/passport.js');

const videoToAudio = require('./routes/main.routes');
const authRoute = require('./routes/auth.routes');
const dashboardRoute = require('./routes/dashboard.routes');
const audioPlayerRoute = require('./routes/audioPlayer.routes');
const youtube2mp3Route = require('./routes/youtube2mp3.routes')

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json({
  limit: '200mb'
}));

app.use(bodyParser.urlencoded({
  limit: '200mb',
  extended: true,
  parameterLimit: 100000
}));

app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));


app.use(flash());

app.use((req, res, next) => {
  res.locals.session = req.session;
//   res.locals.h = helpers;
  res.locals.flashes = req.flash();
  res.locals.user = req.user || null;
  res.locals.currentPath = req.path;
  next();
});

// Passport configuration
initializingPassport(passport);

// Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());


// handle our api routes!
app.get("/", (req, res) => {
  res.sendFile("/public/index.html")
})

app.use('/', videoToAudio);
app.use('/auth', authRoute);
app.use('/dashboard', dashboardRoute);
app.use('/audio', express.static(path.join(__dirname, 'public/audio')));
app.use('/audioplayer', audioPlayerRoute);
app.use('/youtube', youtube2mp3Route);


// done! we export it so we can start the site in start.js
module.exports = app;