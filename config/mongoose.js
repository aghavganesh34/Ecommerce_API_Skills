const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://aghavganesh34:AbJnfM0rapAfCY68@cluster0.bldoirg.mongodb.net/?retryWrites=true&w=majority')
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));
db.once('open', (err) => {
    if (err) {
        console.log("mongo db connnection err");
    }
    else {
        console.log('mongo connnected');
    }
})
module.exports = db;
