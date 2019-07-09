// prod.js - production keys

module.exports = {
	mongoURI: process.env.MONGO_URI,
	sendgridKey: process.env.SENDGRID_KEY,
	email: process.env.EMAIL
}

