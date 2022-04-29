const mongoose = require('mongoose');
//const validator = require('validator')
const Animals = new mongoose.Schema({

        name:{
            type: String,
            required: true,
        },
        No_of_legs:{
            type:Number,
            required: true,
        },
        color:{
            type:String,
            required: true,
        },
        Batch_No:{
            type: Number,
            required: true,
        }

    },{timestamps:true})


       module.exports = mongoose.model("Animal", Animals)


    
   
