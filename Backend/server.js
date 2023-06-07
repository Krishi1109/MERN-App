const express = require('express')
const dotenv = require("dotenv")
dotenv.config()

const port = process.env.PORT || 4000

const cors = require('cors')


const connectDatabase = require("./db/conn")
connectDatabase()

const app = express()
app.use(express.json())

app.use(cors())

const userRoute = require("./routers/userRoute")
app.use('/api/user', userRoute)

// Port Listen
app.listen(port, () => {
    console.log(`Connection is live on port number ${port}`)
})