const express=require('express')
const morgan=require('morgan')
const app=express();
require('dotenv').config();
require('./config/conn')
const userRouter=require('./routes/user_router')
PORT=process.env.port

// router api
app.use(userRouter)

//middleware
app.use(morgan('tiny'))
app.listen(PORT,()=>
{
    console.log(`server is running on ${PORT}`)
})

