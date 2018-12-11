import * as express from 'express';

import UserCtrl from './controllers/user';
import MarkerCtrl from './controllers/marker';
import BaseCtrl from './controllers/base';


export default function setRoutes(app) {
  const router = express.Router();
  const userCtrl = new UserCtrl();
  const markerCtrl = new MarkerCtrl();

  router.route('/users-getall').get(userCtrl.select);
  router.route('/users-get/:id').get(userCtrl.getbyId);
  router.route('/users-get/:name').get(userCtrl.getbyName);

  router.route('/markers-getall').get(markerCtrl.select);
  router.route('/markers-insert').post(markerCtrl.insert);


  app.use('/api', router);
}
