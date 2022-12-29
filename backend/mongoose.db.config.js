const mongoose = require("mongoose");

const mongooseConnectDB = (uri) => {
    mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connected to Mongo");
        })
        .catch((e) => {
            console.log("Failed to connect to Mongo");
            console.log(e);
        });
};

module.exports = mongooseConnectDB;
