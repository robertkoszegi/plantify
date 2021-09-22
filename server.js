const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config()
require('./config/database.js')

const app = express();

app.use(logger('dev'));
app.use(express.json());


// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api/users', require('./routes/api/users'));



// Put API routes here, before the "catch all" route
// app.use('/api/details', require('./routes/api/details.js'))
app.use(require('./config/auth'));
app.use('/api/plantList', require('./routes/api/plantList.js'));
app.use('/api/recommendations', require('./routes/api/recommendations.js'));
app.use('/api/wishlist', require('./routes/api/wishlist.js'));
// this one is going to do double duty, serving both items and categories-related routes:

app.use(function (err, req, res, next) {
  //This will catch all errors that are passed to next from our middleware
  res.status(500).json(err);
});
// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
// ** MOUNT ANY OTHER ROUTES BEFORE THIS ONE ***
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});