const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    fristname: {
        type: String,
        
        trim: true
    },
    phone: {
        type: Number,
        
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: function(){return !this.isUpdate }
    },
    address: {
        type: String,
       
    },
    nic: {
        type: String,
    },
    image: {
        type: String,
        
    },
    userType:{
        type: String,
    },
    isUpdate: {
        type: Boolean,
        required: true
    },
    gender: {
        type: String,
    },
    postalCode: {
        type: String,
    },
    cType: {
        type: String,
    },
    mainBranch: {
        type: String,
    },
    SOD: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)
