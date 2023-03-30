const mongoose =require('mongoose')


const PersonSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    salary:Number,
    department:String,
    lastCompany:String,
    lastSalary:String,
    overallExp:String,
 
    yearGrad:String,
    gradStream:String,
    
})

const Person=mongoose.model("persondetails",PersonSchema)
module.exports={
    Person,
}