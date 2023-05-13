const mongoose = require('mongoose'); //gets database connection//require means labagannawa.its keyword 
const Schemaa = mongoose.Schema; //create schema for create data

const PuchaseSchema = new Schemaa({ 
   
    pdname : {

        type : String,  
        required : true,
                        
    },
    pdaddress :{
        
        type : String,
        required : true,
    },

    pdemail :{
        
        type : String,
        required : true,
         
    },

    pdtel :{
        
        type : Number,
        required : true,
         
    }

    
})





const Puchase = mongoose.model("Puchasedetails",PuchaseSchema); //"Student"- create table name / model name
module.exports = Puchase; //exports the schema that created to Mdb