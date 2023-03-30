 const {Person}=require('../models/person')

 const persondata=async(req,res)=>{
    const Pdata=req.body;
    try {
        const myperson=new Person({
            firstName:Pdata.firstName,
            lastName:Pdata.lastName,
            salary:Pdata.salary,
            department:Pdata.department,
            lastCompany:Pdata.lastCompany,
            lastSalary:Pdata.lastSalary,
            overallExp:Pdata.overallExp,
            yearGrad:Pdata.yearGrad,
        
            gradStream:Pdata.gradStream,
          
          })
        
            const dbresponse= await myperson.save()
            console.log("data is saved =>",dbresponse);
        
    } catch (error) {
      console.log("your error in model =>",error)
    }
     
 }
 //find all persons
 const findperson=async (req,res)=>{
  
    try {
        const result= await Person.find()
        console.log(result);
    } catch (error) {
        console.log("your error in findperson",error);
        
    }
}

 //find person who have more than salary 30000?
    const findpersonsalary=async (req,res)=>{
        const query={"salary":{'$gt':30000}};
        try {
            const result= await Person.find(query)
            console.log(result);
        } catch (error) {
            console.log("your error in findperson",error);
            
        }
    }
    //find persons who have exp and salareay more than equal to 2 years ?
    const findpersonsalaryandExp=async (req,res)=>{
        const query=({"salary":{'$gt':30000}, "overallExp":{'$gte':2}});
        try {
            const result= await Person.find(query)
            console.log(result);
        } catch (error) {
            console.log("your error in findperson",error);
            
        }
    }
// find person who has gardtued and more exp tha 1 year?
    const findpersongrad=async (req,res)=>{
        const query=({"yearGrad":{'$gte':2015}, "overallExp":{'$gt':1}});
        try {
            const result= await Person.find(query)
            console.log(result);
        } catch (error) {
            console.log("your error in findperson",error);
            
        }
    }
    //update the persons slaary
    const findpersonupdate=async (req,res)=>{
      const query=({"salary":"30000"},{'$set':{"salary":"35000"}})
        try {
            const result= await Person.updateMany(query)
            console.log(result);
        } catch (error) {
            console.log("your error in findperson",error);
            
        }
    }
// delete person data who has from lastcomapany "y"
    const findpersondelete=async (req,res)=>{
        const query={"lastCompany":"Y"};
        try {
            const result= await Person.deleteMany(query)
            console.log(result);
        } catch (error) {
            console.log("your error in findperson",error);
            
        }
    }




 module.exports={
    persondata,findperson,findpersonsalary,findpersonsalaryandExp,findpersongrad,findpersondelete,findpersonupdate,
    // persondata,findperson,findpersonsalary,findpersonsalaryandExp,findpersongrad,findpersonupdate,findpersondelete,
 }


















//  const Pdata=req.body
//     try {
//         const result=await mongoClient.InsertToDb(Pdata)
//         console.log("your result is",result);
//     } catch (error) {
//         console.log("your error",error);
        
//     }