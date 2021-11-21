const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
app.post('/add-new-post', async (req,res)=>{
    const myName = req.body.Name;
    const myRegNo = req.body.RegNo;
    const myMarks = req.body.Marks;
    try{
        const newData = new schema(
            {
                Name: myName,
                RegNo: myRegNo,
                Marks: myMarks
            }
        )
        const saveData = await newData.save()
    }catch(err){
        res.json(err);
    }
})