function createRouter(router, path, view=path, title=path) {
   path = '/' + path;
   view = '/' + view;
   file = 'sites/index';
   router.get(path, function(req, res, next) {
      res.render(file, { title: title, view: view });
   })

   return router;
}


// Exports
module.exports = { createRouter };

