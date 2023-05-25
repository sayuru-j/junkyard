const User = require('../models/user')

exports.signup = (req, res)=> {
    //console.log('SIGNUP CONTROLLER', req.body)
    const { name, email, password } = req.body;

    // Checking existing emails
    User.findOne({email}).exec((err, user)=>{
        if (user) {
            return res.status(400).json({
                error: 'Email is taken'
            });
        }
    })

    // Saving the user in db
    const newUser = new User({name, email, password})
    newUser.save((err, result)=>{
        if (err) {
            return res.status(401).json({
                error: 'Error saving user in database. Try later'
            });
        }
        return res.json({
            message: 'Registration success. Please login.'
        });
    })
}