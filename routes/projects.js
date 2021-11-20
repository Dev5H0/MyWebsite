// Imports
const funcs = require('./funcs');
const { Router } = require('express');
let router = Router();


// Routing
funcs.createRouter(router, '', 'projects', 'Projects');
funcs.createRouter(router, 'test', 'projects', 'Test')


// Exports
module.exports = router;
