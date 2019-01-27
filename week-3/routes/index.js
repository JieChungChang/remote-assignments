const express = require('express');
const router   = express.Router();

router.get('/', (req, res)=> {
  const name = req.cookies.username;

  if (name) {
    res.render('index', { name: name });
  
  } else {
    res.redirect('hello');
  
  }
});

router.get('/color', (req, res)=> {
	res.render('color', {colors: colors});
})

router.get('/hello', (req, res)=> {
  const name = req.cookies.username;

  if (name) {
    res.redirect('/');
  
  } else {
    res.render('hello');
    
  }
})

// 測試
router.get('/myName', (req, res)=> {
  const name = req.cookies.username;
  res.render('myName', { name: name });
})

router.get('/trackName', (req, res) => {
  const { name } = req.query;
  res.cookie('username', req.query.name);
  res.redirect('myName');
})

router.post('/trackName', (req, res) => {
  const name = req.body.username;
  res.redirect(`/trackName?name=${name}`);
})
// 測試

router.post('/hello', (req, res)=> {
  res.cookie('username', req.body.username);
  res.redirect('/');
})

router.post('/goodbye', (req, res)=> {
  res.clearCookie('username');
  res.redirect('/hello');
})

module.exports = router;
