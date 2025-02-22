const mongoose = require('mongoose')

const employerSchema = new mongoose.Schema({
    companyName: { 
        type: String, 
        required: true 
    },
    contactPhone: { 
        type: String, 
        required: true 
    },
    contactEmail: { 
        type: String, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    industry: { 
        type: String, 
        required: true 
    },
    aadharNo: { 
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Employer = mongoose.model('employers', employerSchema)

module.exports = { Employer }