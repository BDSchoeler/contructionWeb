// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors=require('cors');
var logger = require('morgan');


var users = require('./routes/users');
var products = require('./routes/products');
var orders = require('./routes/orders');
var projects = require('./routes/projects');
var suppliers = require('./routes/suppliers');
var tasks = require('./routes/tasks');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(cors());
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
app.use('/users', users);
app.use('/products', products);
app.use('/orders', orders);
app.use('/projects', projects);
app.use('/suppliers', suppliers);
app.use('/tasks', tasks);
// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
