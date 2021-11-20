// Imports
const funcs = require('./funcs');
const { Router } = require('express');
let router = Router();


// Routing
funcs.createRouter(router, '', 'index', 'Homepage');


// Exports
module.exports = router;
