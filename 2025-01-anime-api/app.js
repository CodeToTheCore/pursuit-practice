const express = require("express") // dependency // require express from node modules
const app = express() // configuration / storing an instiance of express in our app varible
const animeController = require("./controllers/animes")


app.use(express.json()); // parse body of data into json object

// any function with access to the request and response object if called middleware
app.get("/", (request, response)=>{
    // console.log(request)
    response.send("Welcome to Animania")
})

app.use("/anime", animeController)

// our routes are setup to listen to requests to their specific URL/ path

app.get("*", (request, response)=>{ // catch all for all request that did not match an route (methods and paths)
    response.status(404).send("The request you are looking for does not exist")
})


module.exports= app;

