const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

// Endpoint that handles POST requests
app.post('/submit', (req, res) => {
    const username = req.body.username;
    if (username){
    console.log('Received username:', username);
    res.send('data received successfully!');
    } else {
        console.log('Username is required');
    }
});




const PORT = 3000;
app.listen(PORT, () =>{
      console.log(`Server running on http://localhost:${PORT}`);
});


