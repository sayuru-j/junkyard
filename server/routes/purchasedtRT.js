const router = require("express").Router();
let Purchase = require("../models/Purchasedt");

router.route("/in").post((req,res)=>{             //ADD Purchse

    const pdname = req.body.pdname;             //key by parsing method, .name .age .gender thses variales are data gets by frontend (postman use these)
    const pdaddress = req.body.pdaddress;      //frontEnd parsing data to backEnd by REQUEST BY BODY method. //number nam method eka isrrhin danna ona
    const pdemail = req.body.pdemail;        //frontEnd data gets here.
    const pdtel = Number(req.body.pdtel);
    
    const newPurchase = new Purchase({         //make new objects for model

        pdname,
        pdaddress,                  //save data for these variables
        pdemail,
        pdtel
        
    })
   
    newPurchase.save().then(()=>{
        res.json('Details Added')
    }).catch((err)=>{
        console.log(err);
    })    

})


router.route("/getpu").get((req,res)=>{       //display all purchase details
    Purchase.find().then((puchdt)=>{
        res.json(puchdt)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;