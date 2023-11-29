const mongoose = require('mongoose');

// is line je jo bhi define kiya hai .env file pe sara ke sara load ho jaiga process object par.

require("dotenv").config();


const dbConnect = () => {

    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => { console.log("DB connected successfully") })
        .catch(
            (error) => {
                console.log("DB not connected")
                console.error(error);
                process.exit(1);
            });

}

module.exports = dbConnect; 