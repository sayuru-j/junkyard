let Vehicle = require("../models/Vehicle");

const addVehicle = async(req,res)=>{
    const {model, year, fleet, register, description } = req.body;

    const newVehicle   = new Vehicle({
        model,
        year,
        fleet,
        register,
        description
    })

    await newVehicle.save().then(()=>{
        res.json("Vehicle Added")
    }).catch((err)=>{
        console.log(err);
    })
}

const getVehicle = async(req,res)=>{

    try {
        const vehicle = await Vehicle.find({})
        res.json(vehicle);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }

     
}

const updateVehicle = async (req, res) => {
    let Id = req.params.id;
    const {model, year, fleet, register, description} = req.body;

    const updateVehicle = {
        model,
        year,
        fleet,
        register,
        description
    }

    // console.log(updateSchedule)

    const update = await Vehicle.findByIdAndUpdate(Id, updateVehicle)
    .then(() => {
        res.status(200).send({status: "Vehicle updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
}


const deleteVehicle = async (req, res) => {
    let vehicleId = req.params.id;

    await Vehicle.findByIdAndDelete(vehicleId)
    .then(() => {
        res.status(200).send({status: "Vehicle deleted"});
        

    }).catch(err=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete vehicle", error: err.message});
    })
}

const getVehicleById = async (req, res) => {
    let vehicleId = req.params.id;
    const vehicle = await Vehicle.findById(vehicleId)
    .then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get vehicle", error: err.message});

    })
}

module.exports = {
    addVehicle,
    getVehicle,
    updateVehicle,
    deleteVehicle,
    getVehicleById
}