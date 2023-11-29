const express = require('express') ;
const app = express() ;

require("dotenv").config() ;
const PORT = process.env.PORT  || 3000 ; // port number nhi aa paya to deafult port hoga 4000


//middlewire to parse json req body

app.use(express.json()) ;


//import routes for todo API

const todoRoutes = require("./routes/todos") ;

//mount the todo API routes

app.use("/api/v1",todoRoutes) ;


app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`) ;
})

//connection

const dbConnect = require("./config/database") ;
dbConnect() ;


//default router
app.get("/",(req,res)=>{
  res.send(`<h1> This is Homepage</h1>`) ;
})