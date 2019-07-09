const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const sgMail = require('@sendgrid/mail');
const keys = require('./config/keys');




// middleware
app.use(cors());
app.use(express.urlencoded( {extended: false} ));
app.use(express.json());


// Routes
app.post('/', (req, res) => {
	sgMail.setApiKey(keys.sendgridKey);

	sgMail.send({
	  to: keys.email,
	  from: req.body.newEmail.email,
	  subject: 'Portfolio Website Message',
	  text: req.body.newEmail.message
	});
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


