const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orgschema = new Schema
({

    org_name : {
        type: String,
        required: true
    },
    
    org_regnum : {
        type: String,
        required: true
    },

    org_Type : {
        type: String,
        required: true
    },

    org_email : {
        type: String,
        required: true
    },
    org_telephone : {
        type: Number,
        required:true
    },
    org_address: {
        type:String,
        required:true
    },

    org_mainbranch: {
        type:String,
        required:true
    },

    org_startdate: {
        type:Date,
        required:true
    },

    org_description : {
        type:String,
        required:true
    },
    org_images : {
        type:String,
        required:true
    }
})
const Orgs = mongoose.model("Orgs",orgschema);
module.exports = Orgs;