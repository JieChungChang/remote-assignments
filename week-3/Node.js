const express      = require("express");
const bodyParser   = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
	'blue',
 	'purple'
  ];

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

const mainRoutes    = require('./routes');
const cardRoutes    = require('./routes/cards');
const getDataRoutes = require('./routes/getData');
// const myNameRoutes  = require('./routes/myName');

app.use(mainRoutes);
app.use('/cards', cardRoutes);
app.use('/getData', getDataRoutes);

app.use(express.static('public'));

app.listen(3000, ()=> {
	console.log("The app is running on the localhost:3000!");
});