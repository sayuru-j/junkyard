const mongoose = require('mongoose')

// Using crypto module to encryption of password
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        max: 12,
        unique: true,
        index: true,
        lowercase: true
    },

    name: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },

    email: {
        type: String,
        trim: true,
        required: true,
        max: 32,
        lowercase: true,
        unique: true
    },

    // Password will be saved after hashing
    hashed_password: {
        type: String,
        required: true
    },

    // We use salt to improve security
    salt: String,

    role: {
        type: String,
        default: "user",
        lowercase: true
    },

    resetPasswordLink: {
        type: String,
        default: ""
    }

},
{ timestamps: true }
)

// Virtual fields
userSchema.virtual('password')
    .set(function(password) {
        // Temp variable for password called _password
        this._password = password

        // generate salt
        this.salt = this.makeSalt()

        // encrypt password
        this.hashed_password = this.encryptPassword(password)

    })
    .get(function() {
        return this._password
    })


// Methods
userSchema.methods = {

    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password
    },

    encryptPassword: function(password) {
        if(!password) return ''
        try {
            return crypto.createHmac('sha1', this.salt)
                    .update(password)
                    .digest('hex')

        } catch(err) {
            return ''
        }
    },

    makeSalt: function() {
        return Math.round(new Date().valueOf() * Math.random()) + ''
    }
}

// Export user model
module.exports = mongoose.model('User', userSchema)