const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.signup = (req, res)=> {
    // console.log('SIGNUP CONTROLLER', req.body)
    const { username,name, email, password} = req.body;
    

    // Checking existing emails
    User.findOne({email}).exec()
        .then(userEmail=>{
            if (userEmail) {
                return res.status(400).json({
                    error: 'Email is taken'
                })
            }
            // Checking existing usernames
            User.findOne({username}).exec()
                .then(userUsername=>{
                    if (userUsername) {
                        return res.status(400).json({
                            error: 'Username is taken'
                    })
                }

                // Saving the user in db
                const newUser = new User({username, name, email, password})
                newUser.save()
                    .then(()=>{
                        console.log("Data Successfully Saved")
                        return res.status(200).json({
                            success: 'Registration Successful'
                        });
                    })
                    .catch((err)=>console.log(err))

                })
                .catch(err=>{
                    console.error(err);
                    return res.status(500).json({
                        error: 'Server error'
                    })
                })
        })
        .catch(err=>{
            console.error(err);
            return res.status(500).json({
                error: 'Server error'
            });
        })


}

exports.login = (req,res) =>{
    // console.log(req.body)
    const { email, password } = req.body;

    // Check if exist 
    User.findOne({email}).exec()
        .then(user=>{
            if (!user){
                return res.status(400).json({
                    error: 'No such email exists'
                })
            }
            if (!user.authenticate(password)){
                return res.status(400).json({
                    error: 'Email and password do not match'
                })
            }
            // Generate token
            const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'})
            const {_id, name, email, role} = user
            
            return res.status(200).json({
                token,
                user: {_id, name, email, password, role}
            })

        })
        .catch(error=>{
            console.log(error)
        })
};