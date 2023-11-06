const mongoose = require("mongoose");

const question3Schema = new mongoose.Schema(
  {
    Description: {
      type: String,

    },
    
    Categorties: [
      {
        type: String,
        required:true
      },
    ],
    itmes: [{
        name:{
              type:String,
              require:true
        },
        belongTo:{
            type:String,
            require:true
        }
    }],
},
  { timestamps: true }
);

const Question3Model = mongoose.model("Question3", question3Schema);

module.exports = Question3Model;
