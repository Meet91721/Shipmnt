const mongoose = require('mongoose');


const patientSchema = mongoose.Schema({
    userName: {
        type: String,
        unique: [true, 'Username already registered'],
        required: [true, 'Please add UserName']
    },
    name: {
        type: String,
        required: [true, "Please add patient's fullname"]
    },
    email: {
        type: String,
        required: [true, 'Please add user email'],
        unique: [true, 'Email already registered']
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: [true, 'Please add user gender']
    },
    contactDetails: {
        type: Number,
        required: [true, 'Please add user mobile number']
    },
    // medicalHistory: {
    //     type: String,
    //     // Will be changed soon
    // }
}
)

module.exports = mongoose.model("Patient", patientSchema);