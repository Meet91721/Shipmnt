const medicalHistory = require('../models/medicalHistory')


//@desc Get all medicalHistory of a patient
//@route GET /api/medical/
//@access public
const getMedicalRecords = async (req, res) => {
    console.log(req.query)

    const data = await medicalHistory.find(req.query)
    console.log(data)
    res.status(200).json(data);
};

//@desc Add a new medicalHistory of a patient
//@route POST /api/medical/
//@access public
const postMedicalHistory = async (req, res) => {
    const medicalData = req.body
    medicalData.appointmentDate = Date(medicalData.appointmentDate)
    console.log(medicalData)
    if (!medicalData.userName || !!medicalData.diseaseName || !medicalData.appointmentDate || !medicalData.prescription || !medicalData.fees) {
        res.status(400).json({ msg: "Every field is required" })
    }
    const addedData = medicalHistory.create(medicalData)
    res.status(200).json({ msg: "Data added" });
};


module.exports = { getMedicalRecords, postMedicalHistory }