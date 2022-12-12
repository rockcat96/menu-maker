////////////////////////////////////////////////
// Menu Model
////////////////////////////////////////////////
const mongoose = require("./connection") //connect to the mongoose that's already connected to the database

const {Schema, model} = mongoose // destructuring, grabbing model and Schema off mongoose variable
// mongoose.Schema
// mongoose.model

// make menu schema
const menuSchema = new Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    allergens: String,
   })

const Menu = model("Menu", menuSchema)
module.exports = Menu