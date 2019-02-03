const express   = require("express");
const mysql     = require("mysql");
const bodyParser= require("body-parser");

const db = mysql.createConnection({
  host    : "localhost",
  user    : "root",
  password: "aa1501293",
  database: "assignment"
});

db.connect( (err) => {
  if (err) {
  	console.log(err);
  	throw err;
  }
  console.log("Connected!");
}); 

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');

//確認是否註冊過
var errMessage = ''; 
var signInMail = '';

//home page
app.get('/', (req, res)=> {
	res.render('index', { message: errMessage });
});

//member page
app.get('/member', (req, res)=> {
	console.log(signInMail);
	res.render('welcome', { email: signInMail });
});

app.post('/signUp', (req, res) => {
	let sql = 'SELECT email FROM user';
	db.query(sql, (err, result) => {
		if(err) throw err;
		
		let mailList   = result;
		signInMail = req.body.email;
		let password = req.body.password;

		for (i=0; i<result.length; i++){
			if (signInMail === mailList[i].email) {
				signInMail = '';
				errMessage = 'This email already sign up by someone! Please try another one!';
				return res.redirect('/');
			}
		}

		errMessage = '';
		//insert
		let insertSQL = "INSERT INTO user (email, password) VALUES('" + signInMail + "', '" + password + "')";
		console.log(signInMail);
		console.log(password);
		
		db.query(insertSQL, (err, result) => {
			if(err) throw err;
			return res.redirect('/member');
		});
	});
});


app.post('/signIn', (req, res) => {
	let sql = 'SELECT * FROM user';
	db.query(sql, (err, result) => {
		if(err) throw err;
		
		let queryList   = result;
		signInMail = req.body.email;
		let password = req.body.password;

		for (i=0; i<result.length; i++){
			if (signInMail === queryList[i].email) {
				if (password === queryList[i].password) {
					return res.redirect('/member');	
				} else {
					errMessage = 'Wrong password';
					return res.redirect('/');	
				}
			} 
		}
		errMessage = "Can't find this account";
		return res.redirect('/');
	});
});

app.listen(3000, () => {
	console.log('Server started on port 3000');
});