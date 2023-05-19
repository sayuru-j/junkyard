const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scheduleSchema = new Schema({

    area : {
        type : String,
        required: true
    },
    date : {
        type : String,
        required: true
    },
    time : {
        type : String,
        required: true
    }

})

const schedule = mongoose.model("schedule",scheduleSchema);

module.exports =  schedule;