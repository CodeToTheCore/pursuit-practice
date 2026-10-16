const express = require('express');
const userRoutes = require('./routes/users');

const app = express();
const port = 3000;

// app.use('/users', userRoutes);
app.use((req, res, next) => {
    console.log('Method:', req.method, 'URL:', req.url);
    next(); // Move to the next middleware or route handler
});

//Example route//
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`);
});


// const express = require('exprerss');
// const userRoutes = require('user/routes');

// const app = express();
// const port = 3000;

// app.listen(port, () =>{
//     console.log('Server running on http://localhost:${port}');
// }); 