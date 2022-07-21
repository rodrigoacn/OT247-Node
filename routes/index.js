var express = require('express');
var router = express.Router();

const categoriesRouter = require('./categories');
const organizationsRouter = require('./organizations');
const authRouter = require('./auth');
const usersRouter = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Auth
router.use('/auth', authRouter)

//Categories
router.use('/categories', categoriesRouter);

//Organizations
router.use('/organizations', organizationsRouter);

router.use('/users', usersRouter);

module.exports = router;
