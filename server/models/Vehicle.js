const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({

    model : {
        type : String,
        required: true
    },
    year : {
        type : String,
        required: true
    },
    fleet : {
        type : String,
        required: true
    },
    register : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    }

})

const vehicle = mongoose.model("vehicle",vehicleSchema);

module.exports =  vehicle;