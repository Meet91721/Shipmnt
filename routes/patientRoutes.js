const express = require('express');
const { getPatients, postPatient, updatePatient, deletePatient } = require('../controllers/patientControllers')
const router = express.Router();
router.get('/', getPatients)
router.post('/', postPatient)
router.put('/update', updatePatient)
router.delete('/', deletePatient)
// const {getContacts, getContact, postContact, putContact, deleteContact} = require('../controllers/contactControllers');

// router.use(validateToken);
// router.route('/').get(getContacts).post(postContact);
// router.route('/:id').get(getContact).put(putContact).delete(deleteContact);

module.exports = router
