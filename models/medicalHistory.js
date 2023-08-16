const mongoose = require('mongoose');


const medicalHistorySchema = mongoose.Schema({
    userName: {
        type: String,
        unique: [true, 'Username already registered'],
        required: [true, 'Please add UserName']
    },
    diseaseName: {
        type: String,
        required: [true, "Please add disease's name"]
    },
    appointmentDate: {
        type: Date,
        required: [true, 'Please add appointment date'],
    },
    prescription: {
        type: String,
        required: [true, "Please add doctor's prescription"],
    },
    fees: {
        type: Number,
        required: [true, 'Please add fees'],
    }
}
)

module.exports = mongoose.model("MedicalHistory", medicalHistorySchema);