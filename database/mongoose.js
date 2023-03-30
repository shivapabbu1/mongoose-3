const mongoose=require('mongoose')

// const url="mongodb://127.0.0.1:27017"
const url='mongodb+srv://shiva_pabbu1:99999@cluster0.aaitgpp.mongodb.net/persons?retryWrites=true&w=majority';
 const connect =async ()=>{
    try {
        console.log("connecting to mongodb..");
         const dbconn=await mongoose.connect(url);
         console.log("connected=>",dbconn);

    } catch (error) {
        console.log("your erros in connect to db",error);
        
    }
   
 }


 module.exports= connect;
