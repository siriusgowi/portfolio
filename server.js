const express = require('express');



const port = process.env.PORT || 3000;


// create new express app
var app = express();


// middleware
app.use(express.static(__dirname + '/public'));


// respond to request
app.get('/', (req, res) => {
	//res.send('<h1>Hello World!</h1>');
	res.send({
		name: 'Jorge Alvarado',
		likes: [
			'Working out',
			'Yoga',
			'Dancing',
			'Programming',
			'Traveling',
			'Animals'
		]
	})
});


app.get('/about', (req, res) => {
	res.send('<h1>About Me</h1>');
});


app.get('/bad', (req,res) => {
	res.send({
		errorMessage: 'You have entered invalid data'
	})
});

// bind application to port on machine
app.listen(port, () => console.log(`We are listening on port ${port}`));


