const mongoose = require('mongoose');

const collectionSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      collectionDate: {
        type: Date,
        required: true
      },
      wasteType: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 0
      }
},
{timestamps: true}
)

module.exports = mongoose.model('Collection', collectionSchema)