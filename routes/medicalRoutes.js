const express = require('express');
// const { getPatients, postPatient, updatePatient, deletePatient } = require('../controllers/patientControllers')
const { getMedicalRecords } = require('../controllers/medicalController')
const router = express.Router();
// router.get('/patients', getPatients)
// router.post('/patient', postPatient)
// router.put('/patient/update', updatePatient)
// router.delete('/patient', deletePatient)
router.get('/', getMedicalRecords)

module.exports = router
