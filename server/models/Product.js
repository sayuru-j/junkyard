const mongoose = require('mongoose'); //gets database connection//require means labagannawa.its keyword 
const Schemaob = mongoose.Schema; //create schema for create data

const ProductSchema = new Schemaob({ 
   
    prid : {

        type : String,  
        required : true,
                        
    },
    prname :{
        
        type : String,
        required : true,
    },

    primage :{

        type: String,
        trim: true,
        required: true
         
    },

    prunitprice :{
        
        type : Number,
        required : true,
         
    },

    prquantity :{
        
        type : Number,
        required : true,
         
    },
    prdetails :{
        
        type : String,
        required : true,
         
    }
    

    
})





const Product = mongoose.model("Productdetails", ProductSchema); //"Student"- create table name / model name
module.exports = Product; //exports the schema that created to Mdb