const mongoose=require('mongoose')
const URL=process.env.url
mongoose.connect( URL)
.then(()=>
{
    console.log(`database is connected to :  ${URL}`);
})
.catch((err)=>
{
   console.log(err) 
})
