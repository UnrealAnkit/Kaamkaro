const { Worker } = require('../models/worker.model.js')
const jwt = require('jsonwebtoken')

async function handleRegisterWorker (req, res) {
    let { name, experience, sex, education, age, email, phone, aadharNo } = req.body

    try {
        if(!name||!experience||!sex||!education||!age||!email||!phone||!aadharNo) {
            return res.status(400).json({ 
                message:'Please enter complete details',
                success: false
            })
        }
        else {
            let result = await Worker.create({ employeeId, name, experience, sex, education, age, email, phone, aadharNo });
            return res.status(200).json({ success:true, data:result })
        }
    } catch (error) {
        console.log(error)
    }
}

async function handleShowWorkers(req, res) {
    try {
        let workers = await Worker.find({})
        return res.status(200).json({ data:workers })
    } catch (error) {
        console.log("Error while fetching products: ", error.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

async function handleGetWorkerById(req, res) {
    try{
        if(req.params.id){
            let id = req.params.id
            let worker = await Worker.findOne({ _id: id })
            return res.status(200).json({ success: true, data:worker })
        } else {
            return res.status(401).json({ success:true, message:'Bad Request' })
        }
    } catch(error) {
        return res.json({ success:false, Error: error })
    }
}
    
async function handleUpdateWorkerById(req, res) {
    try {
        const { id } = req.params;
        const updateData = req.body;
        if (!id) {
            return res.status(400).json({ success: false, message: 'Worker ID is required' });
        }
        const updatedWorker = await Worker.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedWorker) {
            return res.status(404).json({ success: false, message: 'Worker not found' });
        }
        else return res.status(200).json({ success: true, data: updatedWorker });
    } catch (error) {
        console.log("Error while updating worker: ", error.message);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}

async function handleDeleteWorker(req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ success: false, message: 'Worker ID is required' });
        }
        const deletedWorker = await Worker.findByIdAndDelete(id);
        if (!deletedWorker) {
            return res.status(404).json({ success: false, message: 'Worker not found' });
        }
        else return res.status(200).json({ success: true, message: 'Worker deleted successfully' });
    } catch (error) {
        console.log("Error while deleting worker: ", error.message);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}

async function handleLoginWorker(req, res) {
    const { id } = req.body
    let foundWorker = Worker.findOne({_id: id})
    if(foundWorker) {
        let token = jwt.sign(id, 'HoHoHo')
        res.cookie('access_token', token)
        return res.status(200).json({success:true, data: foundWorker})
    } else {
        return res.status(401).json({success: false, message: "Unauthorized Request."})
    }
}

module.exports = { 
    handleRegisterWorker,
    handleShowWorkers,
    handleGetWorkerById,
    handleUpdateWorkerById,
    handleDeleteWorker,
    handleLoginWorker
}