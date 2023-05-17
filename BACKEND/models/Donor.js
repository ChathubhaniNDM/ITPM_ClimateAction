const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const donorSchema = new Schema({

    d_name: {
        type : String,
        required: true
    },
    d_address : {
        type : String,
        required : true
    },
    d_contact : {
        type : Number,
        required : true
    },
    d_email : {
        type : String,
        required : true

    },
    
})

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
