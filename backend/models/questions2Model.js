const mongoose = require("mongoose");

const question2Schema = new mongoose.Schema(
  {
    
   
    sentence: {
      type: String,
      required: true,
    },

    Options: [
      {
       index:{ 
        type: Number,
        required:true
       },
       option:{
        type: String,
        required:true 
       }
      },
    ],
  },
  { timestamps: true }
);

const Question2Model = mongoose.model("Question2", question2Schema);

module.exports = Question2Model;