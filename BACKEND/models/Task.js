const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    aname : {
        type : String,
        required: true  
    },

    tprogramname : {
        type: String,
        required: true
    },
    tdistrict : {
        type: String,
        required:true
    },
    tdate : {
        type:String,
        required:true
    },
    tcost : {
        type:Number,
        required:true
    }
})
const  Task = mongoose.model("Task",taskSchema);

module.exports = Task;

