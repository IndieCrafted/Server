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
  router.delete('/beer/delete', controller.beer.deleteBeer);

  // Screen
  router.get('/screen/list', controller.screen.list);
  router.post('/screen/addBeer', controller.screen.addBeer);
  router.delete('/screen/removeBeer', controller.screen.removeBeer);
};
