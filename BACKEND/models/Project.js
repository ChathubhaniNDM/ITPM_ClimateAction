const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    Pname :{
        type : String,
        required : true

    },

    PType:{
        type :String,
        required : true
    },

    CName:{

        type :String,
        required : true

    },

    Description:{

        type :String,
        required : true

    },

    SDate:{

        type : Date,
        required : true

    },

    EDate:{

        type : Date,
        required : true 

    },

    EAmount:{

        type : Number,
        required : true

    },

    Document:{

        type : String,
        

    }
})

const Project = mongoose.model("Project",projectSchema);

module.exports = Project;