const express = require('express');
// const { getPatients, postPatient, updatePatient, deletePatient } = require('../controllers/patientControllers')
const { getMedicalRecords, postMedicalHistory } = require('../controllers/medicalController')
const router = express.Router();


router.get('/', getMedicalRecords)
router.post('/', postMedicalHistory)


module.exports = router
