const mongoose = require('mongoose')

const centerSchema = mongoose.Schema({
    center_Id:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        max:10,
        min:6
    },
    center_Name: {
        type: String,
        trim: true,
        required: true,
        max: 20
    },
    address: {
        type: String,
        required: true
    },
    supervisor: {
        type: String,
        trim: true,
        required: true,
        max:20
    },
    phone_No: {
        type: String,
        trim: true,
        required:true,
        max: 11
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    operating_Hours: {
        type: String,
        trim: true,
        required: true
    },
    accepted_Materials: {
        type: Array,
        trim: true,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    photo_Url:{
        type: String,
        trim: true,
        required: true
    },
    services_Offered: {
        type: String,
        trim: true
    }
},
{timestamps: true}
)

module.exports = mongoose.model('Center', centerSchema)