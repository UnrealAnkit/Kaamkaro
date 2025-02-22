const mongoose = require('mongoose')

const workerSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },
    experience: { 
        type: String 
    },
    sex: { 
        type:String, 
        enum:['M', 'F', 'Others'], 
        required: true 
    },
    education: { 
        type: String 
    },
    age: { 
        type: Number, 
        required: true 
    },
    email: {  
        type: String 
    },
    phone: { 
        type: String, 
        required: true 
    },
    aadharNo: { 
        type:String, 
        required: true 
    },
    password: {
        type: String,
        required: true
    }
})

const Worker = mongoose.model('workers', workerSchema)

module.exports = { Worker }