const {Router} = require('express');
const router = Router();
const employesController = require('../controllers/employes.controller');

router.get('/',employesController.getEmployes);
router.post('/',employesController.createEmployes);
router.get('/:id',employesController.getEmploye);
router.get('/users/:cedula',employesController.getEmployeByCedula);
router.put('/:id',employesController.updateEmploye);
router.delete('/:id',employesController.deleteEmployes);


module.exports = router;