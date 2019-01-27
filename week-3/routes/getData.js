const express   = require('express');
const router    = express.Router();


router.get('/', (req, res)=> {
	const { number } = req.query;

	const name = req.cookies.username;

	const data = { name };

	if ( !number ) {
		data.errMessage = 'Lack of Parameter!'
		return res.render('getData', data)
	}

	if ( parseInt(number) ) {
		let count = 0;
		for (let i = 1; i <= parseInt(number); i++){
			count += i;
		}

		data.count = count;
	} else {
		data.errMessage = 'Wrong Parameter!';
	}
	
	res.render('getData', data);

});

module.exports = router;