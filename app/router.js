'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // Beer
  router.get('/beer/list', controller.beer.list);
  router.post('/beer/create', controller.beer.create);
  router.put('/beer/update', controller.beer.update);
  router.put('/beer/updateStatus', controller.beer.updateStatus);

  // Screen
  router.get('/screen/list', controller.screen.list);
  router.put('/screen/update', controller.screen.update);
};
