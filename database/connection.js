// const {MongoClient}=require('mongodb')

// const url="mongodb://127.0.0.1:27017"

// const client=new MongoClient(url)

// const InsertToDb= async (data)=>{
//     try {
//         const database=client.db('persons')
//         const collection=database.collection("persondetails")
//         await client.connect()
//         const dbresponse=await collection.insertMany(data)
//         await client.close()
//         return dbresponse
//     } catch (error) {
//         return error.message;
        
//     }
// }






// module.exports={
//     InsertToDb,
// }