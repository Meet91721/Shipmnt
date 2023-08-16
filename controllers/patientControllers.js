// const asyncHandler = require('express-async-handler');
const Patient = require('../models/patientModel')

//@desc Get all patients
//@route GET /api/patients
//@access public
const getPatients = (req, res) => {
    res.status(200).json("SHREE");
    // const patients = Contact.find({user_id: req.user.id});
    // res.status(200).json(patients);
};

//@desc Post a new patient
//@route POST api/patient
//@access public
const postPatient = async (req, res) => {
    const { userName, name, email, gender, contactDetails, medicalHistory } = req.body;
    if (!userName || !name || !email || !gender || !contactDetails || !medicalHistory) {
        res.status(400)
        throw new Error('All fields are mandatory')
    }
    console.log(name, email, gender, contactDetails, medicalHistory)
    const patient = await Patient.create({
        userName, name, email, gender, contactDetails, medicalHistory
    });
    console.log(patient)
    // const user_id = req.user.id;
    // const contact = Contact.create({
    //     name, email, phoneNo, user_id: req.user.id
    // });
    // res.status(201).json(contact);
    res.status(201).json({ "msg": "Added a new patient" });
}


//@desc Update an existing patient
//@route PUT api/patient/update
//@access public
const updatePatient = async (req, res) => {
    // const { name, email, gender, contactDetails, medicalHistory } = req.body;
    const requestedData = req.body;
    if (!requestedData.userName || !requestedData.name || !requestedData.email || !requestedData.gender || !requestedData.contactDetails || !requestedData.medicalHistory) {
        res.status(400)
        throw new Error('All fields are mandatory')
    }
    console.log(requestedData)

    const updatedData = await Patient.findOneAndUpdate(
        { userName: requestedData.userName },
        {
            $set: { email: requestedData.email },
            $set: { name: requestedData.name },
            $set: { gender: requestedData.gender },
            $set: { contactDetails: requestedData.contactDetails },
        },
        { new: true }
    )

    res.status(201).json({ "msg": "Successfully updated" });
}

//@desc Delete an existing patient
//@route DELETE api/patient
//@access public
const deletePatient = async (req, res) => {
    // const { name, email, gender, contactDetails, medicalHistory } = req.body;
    const requestedData = req.body;
    if (!requestedData.userName || !requestedData.name || !requestedData.email || !requestedData.gender || !requestedData.contactDetails || !requestedData.medicalHistory) {
        res.status(400)
        throw new Error('All fields are mandatory')
    }
    console.log(requestedData)

    const deletedPatient = await Patient.deleteOne(
        { userName: requestedData.userName },
    )

    res.status(201).json({ "msg": "Successfully deleted" });
}

module.exports = { getPatients, postPatient, updatePatient, deletePatient };