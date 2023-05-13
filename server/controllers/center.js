const Center = require('../models/center')

exports.addCenter = (req, res) =>{
    const { center_Id, center_Name, address, supervisor, phone_No, email, operating_Hours, accepted_Materials, capacity, photo_Url, services_Offered } = req.body
    // console.log(photo_Url)
    Center.findOne({center_Id}).exec()
        .then(cenId=>{
            if(cenId){
                return res.status(400).json({
                    error: 'Center ID already exists'
                })
            }

            // Save data
            const newCenter = new Center({center_Id, center_Name, address, supervisor, phone_No, email, operating_Hours, accepted_Materials, capacity, photo_Url, services_Offered})
            newCenter.save()
                .then(()=>{
                    console.log("Data Successfully Saved")
                        return res.status(200).json({
                            success: 'Center Added'
                        });
                })
                .catch(err=>console.log(err))
        })
        .catch(err=>{
            console.error(err);
            return res.status(500).json({
                error: 'Server error'
            });
        })
}

exports.viewCenter = async(req, res) => {
        try {
            const centers = await Center.find({})
            res.json(centers);
        } catch(err) {
            res.status(500).json({ message: err.message });
        }
}

exports.viewCenterById = async(req, res) => {
    try {
        const centerById = await Center.findOne({ center_Id: req.params.id })
        if (!centerById) {
            return res.status(404).send('Center not found');
        }
        res.json(centerById);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}

exports.editCenter = (req, res) => {
    console.log(req.body)
}

exports.deleteCenter = async(req, res) => {
    try {
        const item = await Center.findOneAndDelete({ center_Id: req.params.id})
        if (!item) {
            return res.status(404).send('Center not found');
            res.send(item);
        }
        return res.status(200).send('Center Deleted');
    } catch (err) {
        res.status(500).send(error.message);
    }
}