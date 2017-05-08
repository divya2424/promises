var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

//path to go to the users
router.route('/v1/users')
  .post(userController.postUsers)
  .get(userController.getUsers);

//path to go to the doctors
router.route('/v1/doctors')
  .post(userController.postDoctors)
  .get(userController.getDoctors);

//path to go to the pharmacists
  router.route('/v1/pharmacists')
  .post(userController.postPharmacists)
  .get(userController.getPharmacists);

//path to get the id of the users
router.route('/v1/users/update/:id')
	.put(userController.updateUsers)
	.delete(userController.deleteUsers)
  .get(userController.searchuser);

  // //path to get the id of the doctors
  // router.route('/v1/doctors/update/:id')
  // 	.post(userController.updateDoctors)
  // 	.delete(userController.deleteDoctors);

//   //path to get the id of the pharmacists
//     router.route('/v1/pharmacists/update/:id')
//       .put(userController.updatePharmacists)
//       .delete(userController.deletePharmacists);



module.exports = router;
