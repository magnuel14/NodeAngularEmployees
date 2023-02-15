const {Router} = require('express');
const router = Router();
const employesController = require('../controllers/employes.controller');
const userContrl = require('../controllers/UserController');

router.get('/',employesController.getEmployes);
router.post('/',employesController.createEmployes);
router.get('/:id',employesController.getEmploye);
router.get('/users/:cedula',employesController.getEmployeByCedula);
router.put('/:id',employesController.updateEmploye);
router.delete('/:id',employesController.deleteEmployes);
router.post('/users/signup',userContrl.signup);
router.post('/users/singnin',userContrl.singnin);



module.exports = router;