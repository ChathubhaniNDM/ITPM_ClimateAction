const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const donationSchema = new Schema({

    community: {
        type : String,
        required: true
    },
    project_type : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    donation_amount : {
        type : Number,
        required : true

    },
    d_date : {
        type : String,
        required : true
    },
})

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;