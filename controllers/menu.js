//////////////////////////////////////////
//Import Dependencies
//////////////////////////////////////////

const express = require("express")
const Menu = require("../models/menu")

//////////////////////////////////////////
//Create Router Variable to attach routes
//////////////////////////////////////////
const router = express.Router() //router will HAVE ALL ROUTES ATTACHED TO IT    

//////////////////////////////////////////
//Actual routes
//////////////////////////////////////////

//command d allows us to select all "app" at the same time to update them to "router"


router.get("/test", (req, res) => {
    res.send("The server is running!")
})


// index route
router.get("/", async (req, res) => {
    const menus = await Menu.find({});
    res.render("index.ejs", { menus });
  });
 
// create route
router.post("/", (req, res) => {
    // req.body.readyToEat = req.body.readyToEat === "on" ? true:false
    Menu.create(req.body, (err, menu) => {
        res.redirect("/menu")
    })
})

// new route
router.get("/new", (req, res) => {
    res.render("new.ejs")
})

//edit route
router.get("/:id/edit", (req,res) => {

    const id = req.params.id

    Menu.findById(id, (err, menu) => {
        // res.json(menu)
        //we don't need ./because ejs already knows to look inside of the views folder 
        res.render("edit.ejs", {menu})
    })

})

//router.put

router.put("/:id", (req,res) => {
    
    //get the id from params
    const id = req.params.id

    //check if the readyToEat property should be true or false
    // req.body.readyToEat = req.body.readyToEat === "on" ? true:false
    
    //update the menu item
    Menu.findByIdAndUpdate(id, req.body,{new: true}, (err, menu) => {
        //new: true just updates the value of the menu item used in the callback function
        //redirects user back to the main page when the menu item has been updated
        res.redirect(`/menu/${id}`)
    })

})


// show route
router.get("/:id", (req, res) => {
    //go and get menu item from the database
    Menu.findById(req.params.id)
    .then((menu) => {
        res.render('show.ejs', {menu})
    })
})

//delete route
router.delete("/:id", (req,res) => {

    Menu.findByIdAndDelete(req.params.id,(err,deletedMenu)=> {
        console.log(err, deletedMenu)
        res.redirect("/menu")
    })
})


//////////////////////////////////////////
//Export the router
//////////////////////////////////////////
module.exports = router