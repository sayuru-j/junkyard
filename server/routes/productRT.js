const router = require("express").Router();
let Product = require("../models/Product");    //connect the model to route path
                                              
router.route("/add").post((req,res)=>{                //ADD Product

    const prid = req.body.prid; 
    const prname = req.body.prname; 
    const primage = req.body.primage;                 //get frontend data to backend by req to body type
    const prunitprice = Number(req.body.prunitprice);  //req.body.prid is frontend data fetcher,prid is backend data asingn variable
    const prquantity = Number(req.body.prquantity); 
    const prdetails = req.body.prdetails; 

    const newProduct = new Product({         //create new object for new prodcut
          
        prid,
        prname,
        primage,                            //save data for theses variables
        prunitprice,
        prquantity,
        prdetails

    })
    
    newProduct.save().then(()=>{         //save the new object by save() function
        res.json('Product Added');       //if added product succesfully
    }).catch((err)=>{
        console.log(err);                 //if prouduct didnt add ,show a err
    })

})
                                          //READ
router.route("/").get((req,res)=>{          //Get all data to get fucntion 
    Product.find().then((product)=>{        //find() all products,after send all products as response to frontend
        res.json(product)
    }).catch((err)=>{                      //if not send the err
        console.log(err)
    })
    

})

                                            //UPDATE
router.route("/update/:id").put(async(req,res)=>{     //async -multiple task support with never crash,:id-data base eke adala query hoyanne :id ekn.

    let userID = req.params.id;                    //fetch all data to parameter and that find by UserID
    //const{prid, prname, primage, prunitprice, prquantity, prdetails} = req.body;    //fontend data passing to backend parameters
    const prid = req.body.prid; 
    const prname = req.body.prname; 
    const primage = req.body.primage;                 
    const prunitprice = Number(req.body.prunitprice);  
    const prquantity = Number(req.body.prquantity); 
    const prdetails = req.body.prdetails; 


    const updateProduct = {            //create object for update
          
        prid,
        prname,
        primage,                            //varibles store updating data
        prunitprice,                        //send data to model
        prquantity,                           
        prdetails

    }
    const update = await Product.findByIdAndUpdate(userID, updateProduct)     //find the obejct by userID,and after updateProduct
    .then(()=>{
        res.status(200).send({status: "Product Updated"})           //IF yes> send sucsesfull
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});        //error: err.message- what is the error, 500- SERVER error!
    })

})                                          

router.route("/delete/:id").delete(async(req, res)=>{          //browser send exact mongo ID for delete(that select automatically when object select)
    let userID = req.params.id;                               // asign that monogo ID to userID paramnter

    await Product.findByIdAndDelete(userID)        //search that id on Product database(findByIdAndDelete) after delete hall object
    .then(()=>{
        res.status(200).send({status: "Product Deleted"});         //send sucsesfull msg fot frontend
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error With Delete Product",error: err.message});     //if not err
    })
})

                                                    //get only one product
router.route("/get/:id").get(async (req, res) =>{    ////http://localhost:8070/student/get/625ad89aad4aa21c9ce6bfab
    let userID = req.params.id;
     const user = await Product.findById(userID)              //variable eka pass wena nisa const add karai
     .then((Productss)=> {                                          //send sucsesfull or error msg for front-end when user updated.
        res.status(200).send({status: "Product fetched",Productss})  //User: , status: - any name as you wish!, user - variable 
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Product", error: err.message}); //error: , status: - any name as you wish
    })
})


module.exports = router;