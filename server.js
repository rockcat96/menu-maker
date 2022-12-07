// import
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

//create express app
const app = express()

//establish mongo connection 
mongoose.connect(process.env.MONGO)

//mongooe connection events
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected to Mongo"))
.on("error", (error) => console.log(error))

//register my middleware
app.use(morgan("dev"))
app.use("/static",express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

//routes and routers 

app.get("/", (req, res) => {
    res.send("The server is working!")
})

//start the server (listener)
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Dancing on port: ${port}`)
})