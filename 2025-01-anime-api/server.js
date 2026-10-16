const app = require("./app")
require ("dotenv").config() // configuration so we have access   alway make sure we config in this kind of file.

const PORT = process.env.PORT || 3000 // syntax for grabbing our environment port (3000 if it is not set)


// app.listen(3000, ()=>{ // We need to update our port 3000 to the actual varible PORT
app.listen(PORT, ()=>{ 
    console.log(` I'm listening at PORT ${PORT}`);// listen for a request at a specific port
})

// Your server must be running in order to make a request
// Server.js is using .env as a enviormental port 