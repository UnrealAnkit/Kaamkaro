const express = require('express')
const app = express()
const dotenv = require('dotenv')
const { Router, authRouter } = require('./config/routes')
const { connectDB } = require('./config/db')
dotenv.config()
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(express.json())

app.use('/api', Router)
app.post('/login', authRouter)

connectDB()
app.listen(process.env.PORT, ()=>{
    console.log(`Server listening at ${process.env.PORT}`)
})