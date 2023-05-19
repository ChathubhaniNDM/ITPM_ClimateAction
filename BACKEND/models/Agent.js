const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agentSchema = new Schema({
    fullname : {
        type : String,
        required: true  
    },

    address : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required:true
    },
    phone : {
        type:Number,
        required:true
    },
    gender : {
        type : String,
        required: true  
    },
    dob : {
        type:String,
        required:true
    },
    district: {
        type:String,
        required:true
    },
   
    description: {
        type:String,
        required:true
    },
    image: {
        type:String,
        required:true
    }
})
const  Agent = mongoose.model("Agent",agentSchema);

module.exports = Agent;

