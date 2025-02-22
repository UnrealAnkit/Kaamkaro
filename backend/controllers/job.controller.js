const { Job } = require("../models/job.model")

async function handleRegisterJob (req, res) {
    let { jobId, jobTitle, jobDescription, salary } = req.body
    
    try {
        if(!jobId||!jobTitle||!jobDescription||!salary) {
            return res.status(400).json({ 
                message:'Please enter complete details',
                success: false
            })
        }
        else {
            await Job.create({ employerId, companyName, contactPhone, contactEmail, location, industry, aadharNo });
        }
    } catch (error) {
        console.log(error)
    }
}

async function handleShowJobs(req, res) {
    try {
        const jobs = await Job.find({})
        return res.status(200).json({ data:jobs })
    } catch (error) {
        console.log("Error while fetching products: ", error.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

async function handleGetJobById(req, res) {
    const { id } = req.params;
    try {
        const job = await Job.findById(id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found', success: false });
        }
        return res.status(200).json({ success: true, data: job });
    } catch (error) {
        console.log("Error while fetching job: ", error.message);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}

async function handleUpdateJobById(req, res) {
    try {
        const { id } = req.params;
        const updateData = req.body;
        if (!id) {
            return res.status(400).json({ success: false, message: 'Job ID is required' });
        }
        const updatedJob = await Job.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedJob) {
            return res.status(404).json({ success: false, message: 'Worker not found' });
        }
        else return res.status(200).json({ success: true, data: updatedJob });
    } catch (error) {
        console.log("Error while updating job: ", error.message);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}

async function handleDeleteJobById(req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ success: false, message: 'Job ID is required' });
        }
        const deletedJob = await Job.findByIdAndDelete(id);
        if (!deletedJob) {
            return res.status(404).json({ success: false, message: 'Job not found' });
        }
        else return res.status(200).json({ success: true, message: 'Job deleted successfully' });
    } catch (error) {
        console.log("Error while deleting job: ", error.message);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}

module.exports = { 
    handleRegisterJob,
    handleShowJobs,
    handleGetJobById,
    handleUpdateJobById,
    handleDeleteJobById
}