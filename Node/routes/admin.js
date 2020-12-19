const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

// Send Emails
const nodeMailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

const router = express.Router();

const products = [];


const transporter = nodeMailer.createTransport(sendGridTransport({
    auth: {
        api_key: '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'
    }
}));

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
	// res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
	res.render(`${rootDir}/views/add-product`, {
		pageTitle: 'Add Product', 
		path: '/admin/add-product', 
		activeProduct: true,
		productCSS: true,
	});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
	// log incoming data to console
	console.log(req.body);
	products.push({ title: req.body.title, message: req.body.message });
	const htmlData = `<body><ul>${products.forEach(product => `<li><h1>${product.title}</h1></br><i>${product.message}</i></li>`)}</ul></body>`;
	console.log(htmlData);
	transporter.sendMail({
		to: 'mittalmayank10@gmail.com',
		from: 'mittalmayank10@gmail.com',
		subject: 'test email from express',
		html: htmlData
	}).catch(err => console.log(err));
	res.redirect('/');
})

exports.routes = router;
exports.products = products;