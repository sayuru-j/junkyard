const Collection = require("../models/collection");

const getCollection = async(req, res) => {
 try {
    const list = await Collection.find()
    if(list){
        res.status(200).json(list)
    }
    else{
        res.status(404)
    }
 } catch (error) {
    console.log(error);
 }
    
}

const getCollectionByID = async(req, res) => {

    const id = req.params.id
    try {
        const collection = await Collection.findById(id)
        res.send(collection)

        
    } catch (error) {
        console.log(error);
    }

}

const addCollection = async(req, res) => {
    const {
        
        name,
        address,
        collectionDate,
        wasteType,
        quantity
      } = req.body;

      try {
        const newCollect = new Collection({
        name,
        address,
        collectionDate,
        wasteType,
        quantity
        })

    const created = await newCollect.save()
    if(created){
        res.status(200).json(created)
    }
    else{
        res.status(404)
    }

      } catch (error) {
        console.log(error);
      }
}

const updateCollection = async(req, res) => {

    try {
     const updatecollection = await Collection.findByIdAndUpdate(req.params.id,{
        ...req.body
     })  
     res.send({
        message: "Collection added",
        item: updatecollection
     });
    } catch (error) {
      console.log(error);  
    }
}

const deleteCollection = async(req, res) => {
 try {
    const deletecollection = await Collection.findByIdAndDelete(req.params.id)
    if(deletecollection){
        res.send({
            message: "Collection deleted",
            item: deletecollection
    })}
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {
    getCollection,
    getCollectionByID,
    addCollection,
    updateCollection,
    deleteCollection

}