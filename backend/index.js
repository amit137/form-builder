const express=require('express')
const app=express()
const mongoose=require('mongoose');
const MCQ = require('./models/mcqModel');




const db=()=>{
    mongoose.connect('mongodb+srv://amitsinghjin13:Sage137@cluster0.bnakryx.mongodb.net/form-builder',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>console.log('Connected to db'))
    .catch(()=>console.error);
}

db()

MCQ.create({
    desc:"What is the capital of India?",
    options:[
        "Delhi",
        "Mumbai",
        "Kolkata",
        "Bangalore"
        ],
        correctOptionIndex:0
})

app.listen(8000,()=>{
    console.log('Sever listening')
})