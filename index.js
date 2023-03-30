const express=require('express')

const bodyparser=require('body-parser')
const personrouter=require('./Routes/person')
const connect=require('./database/mongoose')
const app=express()

app.use(bodyparser.json())
app.use(personrouter)
app.use(connect)

app.listen(4001, async ()=>{
    console.log("sever is runs on 4001");
   await connect()
})
