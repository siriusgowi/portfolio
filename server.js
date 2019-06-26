const express = require('express');
const app = express();
const path = require('path');
// config
const keys = require('./config/keys');
// data
const data = require('./data/data.json');



// middleware
app.use(express.urlencoded( {extended: false} ));
app.use(express.json());


// @route 			GET /data
// @description 	Get website data. Request made via react 'Container' component
// @access 			Public
app.get('/data', (req,res) => {
	res.status(200).json(data);
});





if (process.env.NODE_ENV === 'production') {
	// express will serve up production assets
	app.use(express.static('client/build'))

	// express will serve up index.html if it doesn't recognize a route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`We are listening on port ${PORT}`));


