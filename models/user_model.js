const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
  first_name:{
    type:String,
    required:true,
    unique:true
  },
  last_name:{
    type:String,
    required:true,
    unique:true
  },
  email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: /^\S+@\S+\.\S+$/, // Simple email format validation
  },
  password:{
    type:String,
    required:true,
    unique:true
  },
  phone_number:{
    type:Number,
    required:true,
    unique:true,
    max:10,
    min:10
  }
})

const User=mongoose.model('User',userSchema)
module.exports=User