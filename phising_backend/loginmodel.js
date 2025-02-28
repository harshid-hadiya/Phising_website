const mongoose=require("mongoose")
const userModule=mongoose.Schema({
    email:{type:String},
    password:{type:String}
})
const usermodule=mongoose.model("user",userModule);
module.exports=usermodule;