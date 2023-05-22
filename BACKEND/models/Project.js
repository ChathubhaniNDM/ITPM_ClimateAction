const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    userId: {
        type: String,
        required: true,
        
      },
    Pname :{
        type : String,
        

    },

    PType:{
        type :String,
        required : true
    },

    CName:{

        type :String,
        

    },

    Description:{

        type :String,
        required : true

    },

    SDate:{

        type : String,
        required : true

    },

    EDate:{

        type : String,
        

    },

    EAmount:{

        type : Number,
        

    },

    Document:{

        type : String,
        

    }
})

const Project = mongoose.model("Project",projectSchema);

module.exports = Project;