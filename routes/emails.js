const express = require('express');
const router = express.Router();
//const router = require('express').Router();
// const sgMail = require('@sendgrid/mail');
// const keys = require('../config/keys');


router.post("/", (req, res) => {

	console.log(req);
	console.log(req.body);


	// sgMail.setApiKey(keys.sendgridAPIKey);

	// sgMail.send({
	//   to: 'jalvaradoas39@outlook.com',
	//   from: emailFrom,
	//   subject: 'Message',
	//   text: msg
	// });
});




module.exports = router;
