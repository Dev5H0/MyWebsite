// Imports 
const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const path = require('path');

let app = express();


// Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Routing
function setRoute(app, router, path=router) {
   router = './routes/' + router;
   path = '/' + path;
   app.use(path, require(router));
   return;
}

app.use('/', require('./routes/index'));
app.use('/projects', require('./routes/projects'))
//setRoute(app, '', 'index');
//setRoute(app, 'projects', 'sites/projects');


// Error Handling
app.use(function(req, res, next) {
   next(createError(404));
});

app.use(function(err, req, res, next) {
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   res.status(err.status || 500);
   res.render('error');
});


// Exports
module.exports = app;
