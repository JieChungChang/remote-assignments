const express = require('express');
const router   = express.Router();

router.get('/', (req, res)=> {
  const name = req.cookies.username;
  res.render('myName', name);
})

router.get('/trackName', (req, res) => {
	const { name } = req.query;
	const templateData = { name };

	res.render('myName', templateData);
})

router.post('/trackName', (req, res) => {
	res.cookie('username', req.body.username);
	const name = res.cookies.username;
	res.redirect(`/trackName?name=${name}`);
})

module.exports = router;