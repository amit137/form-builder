const mongoose = require("mongoose");

const question1Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: [{ type: String }],
    passage: {
      type: String,
      required: true,
    },
    instructions: [
      {
        type: String,
      },
    ],
    points: {
      type: Number,
      default: 0,
    },
    multipleChoiceQuestions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"mcq"
      },
    ],
  },
  { timestamps: true }
);

const Question1Model = mongoose.model("Question1", question1Schema);

module.exports = Question1Model;
