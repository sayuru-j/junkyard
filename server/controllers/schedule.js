let Schedule = require("../models/Schedule");

const addSchedule = (req,res)=>{
    const area = req.body.area;
    const date = req.body.date;
    const time = req.body.time;

    const newSchedule   = new Schedule({
        area,
        date,
        time
    })

    newSchedule.save().then(()=>{
        res.json("Schedule Added")
    }).catch((err)=>{
        console.log(err);
    })
}

const getSchedule = async(req,res)=>{

    try {
        const schedule = await Schedule.find({})
        res.json(schedule);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }

     
}

const updateSchedule = async (req, res) => {
    let Id = req.params.id;
    const {area, date, time} = req.body;

    const updateSchedule = {
        area,
        date,
        time
    }

    // console.log(updateSchedule)

    const update = await Schedule.findByIdAndUpdate(Id, updateSchedule)
    .then(() => {
        res.status(200).send({status: "Schedule updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
}


const deleteSchedule = async (req, res) => {
    let scheduleId = req.params.id;

    await Schedule.findByIdAndDelete(scheduleId)
    .then(() => {
        res.status(200).send({status: "Schedule deleted"});
        

    }).catch(err=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete schedule", error: err.message});
    })
}

const getScheduleById = async (req, res) => {
    let scheduleId = req.params.id;
    const schedule = await Schedule.findById(scheduleId)
    .then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get schedule", error: err.message});

    })
}

module.exports = {
    addSchedule,
    getSchedule,
    updateSchedule,
    deleteSchedule,
    getScheduleById
}