const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const adminData = require('./admin');

// Send Emails
const nodeMailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

const router = express.Router();

// const apiKeys =  { // you can use sendgrid id and passord or directly suse api key
//     auth: {
//       api_user: 'SENDGRID_USERNAME',
//       api_key: 'SENDGRID_PASSWORD'
//     }
//   }

const transporter = nodeMailer.createTransport(sendGridTransport({
    auth: {
        api_key: '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'
    }
}));

router.get('/', (req, res, next) => {
    // console.log('adminData in shop--->',adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // allows us to send a response
    const products = adminData.products;
    console.log('products-->', products);
    let text = '';
    for(let product of products){
        text+=`<li><h1>${product.title}</h1></br><i>${product.message}</i></li>`;
    }
    const htmlData = `<body><ul>${text === undefined ? 'no text available' : text}</ul></body>`;
    console.log('htmldata-->', htmlData);
    res.render(`${rootDir}/views/shop`, {
        prods: products, 
        pageTitle: 'MM Shop', 
        path: '/', 
        hasProducts: products.length > 0,
        activeShop: true,
    });
    if(text && products.length) {
        console.log('now send email with html--->',htmlData);
        transporter.sendMail({
                to: 'mittalmayank10@gmail.com',
                cc: 'manas.arora119@gmail.com',
                from: 'mittalmayank10@gmail.com',
                subject: 'test email from express js',
                html: htmlData,
            }).catch(err => console.log(err));
        }
});

// then(result => {
//     console.log('ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss');
//     return transporter.sendMail({
//         to: 'mittalmayank10@gmail.com',
//         from: 'emailSentByMayankMittal.com',
//         subject: 'test email from express',
//         html: htmlData
//     });
// }).catch(err=> err);
module.exports = router;