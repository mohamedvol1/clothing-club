const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));

	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.listen(port, (error) => {
	if (error) throw error;
	console.log('server is running in port' + port);
});

// handing the strip payment
app.post('/payment', (req, res) => {
	console.log('request body is here', req.body);
	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: 'usd'
	};

	stripe.charges.create(body, (stripeErr, stripeRes) => {
		console.log('stripe stripeErr here>>>>', stripeErr);
		if (stripeErr) {
			res.status(500).send({ error: stripeErr });
		} else {
			res.status(200).send({ success: stripeRes });
		}
	});
});
