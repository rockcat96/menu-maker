////////////////////////////////////////////////////
///////////// Database Connections
////////////////////////////////////////////////////
require("dotenv").config() //Load env variables
const mongoose = require("mongoose") //gives use that db connections and cool methods for crud to the datas


// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG)

// Events for when connection opens/disconnects/errors
mongoose.connection
.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))


//export mongoose with connection to use in other files
module.exports = mongoose