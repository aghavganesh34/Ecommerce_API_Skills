const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/Product_List_skill_test')
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