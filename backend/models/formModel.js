const mongoose=require('mongoose')

const formSchema=new mongoose.Schema({
    question1:
    [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Question1"
              }
        ],
    
    question2:
      [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Question2"
          }
        ],
    
    question3:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Question3"
              }
        ]
    
},{timestamps:true})

