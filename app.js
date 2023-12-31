require('dotenv').config()
const express = require('express')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const errorHandlerMiddleware = require('./middleware/error-handler')
const app = express()
const port = 3000

// middleware
app.use(express.json())

app.use(express.static('./public'))

app.use(errorHandlerMiddleware)

app.use('/api/v1/tasks',tasks)


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,(req,res) =>{ console.log(`Server listening ${port}....`); })
        
    } catch (error) {
     console.log(error);   
    }
}

start()