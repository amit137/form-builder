const mongoose = require('mongoose');

const mcqSchema = new mongoose.Schema({
  desc: {
    type: String,
    required: true,
  },
  options: [
    {
      type: String,
      required: true,
    },
  ],
  correctOptionIndex: {
    type: Number,
    required: true,
  },
});


const MCQ=mongoose.model('mcq',mcqSchema)

module.exports=MCQ
