const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const expressHbs = require('express-handlebars');

const rootDir = require('./util/path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// app.engine('handlebars', expressHbs({
// 	layoutsDir: 'Node/views/layouts/', 
// 	defaultLayout: 'main-layout', 
// 	extname: 'handlebars'
// }));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

// adding 404 page
app.use((req, res, next) => {
	// res.status(404).sendFile(path.join(rootDir, 'views', 'pageNotFound.html'));
	res.status(404).render(`${rootDir}/views/pageNotFound`, {pageTitle: '404 page'});
})

// const server = http.createServer(app);
// server.listen(2222);
app.listen(2222); // it exactly does which we are doing above in two lines


// Templating Engines : 
/*
make html templates for dynamic code
spme templating engines are :

EJS 							<p> <%= name %></p>
Pug (Jade)						p #{name}
Handlebars						<p>{{name}}</p>

npm install --save ejs pug express-handlebars
*/