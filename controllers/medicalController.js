const medicalHistory = require('../models/medicalHistory')


//@desc Get all medicalHistory of a patient
//@route GET /api/medical/
//@access public
const getMedicalRecords = async (req, res) => {
    console.log(req.query)

    const data = await medicalHistory.find(req.query)
    console.log(data)
    res.status(200).json("SHREE");
    // const patients = Contact.find({user_id: req.user.id});
    // res.status(200).json(patients);
};


module.exports = { getMedicalRecords }