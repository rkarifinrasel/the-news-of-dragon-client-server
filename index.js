const express=require('express')
const app=express();
const cors=require('cors')
const port=5000;
const catagory=require('./Data/Catagory.json')
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Dragon is running')
})
app.get('/catagory',(req,res)=>{
    res.send(catagory)
})
app.listen(port,()=>{
    console.log(`Dragon Api is running port:${port}`)
})