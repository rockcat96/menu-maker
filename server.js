// import
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const menuRouter = require("./controllers/menu")

//create express app
const app = express()


//register my middleware
app.use(morgan("dev"))
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.use('/menu', menuRouter)



//start the server (listener)
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Dancing on port: ${port}`)
})