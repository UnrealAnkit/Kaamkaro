const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    jobTitle: { 
        type: String, 
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    salary: { 
        type: Number, 
        required: true 
    }
})

const Job = mongoose.model('jobs', jobSchema)

module.exports = { Job }