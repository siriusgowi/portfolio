const express = require('express');
const path = require('path');


const port = process.env.PORT || 5000;


// create new express app
var app = express();


// middleware
app.use(express.static(path.join(__dirname, 'client/src/index.js')));


// respond to request
app.get('/', (req, res) => {
	res.send('<h1>Hello World!</h1>');
});

// bind application to port on machine
app.listen(port, () => console.log(`We are listening on port ${port}`));


