const { Employer } = require("../models/employer.model")
const jwt = require('jsonwebtoken')

async function handleShowEmployers(req, res) {
    try {
        const employers = await Employer.find({})
        return res.status(200).json({ data:employers })
    } catch (error) {
        console.log("Error while fetching employers: ", error.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

async function handleRegisterEmployer (req, res) {
    let { employerId, companyName, contactPhone, contactEmail, location, industry, aadharNo } = req.body

    try {
        if(!companyName||!contactPhone||!contactEmail||!location||!industry||!aadharNo) {
            return res.status(400).json({ 
                message:'Please enter complete details',
                success: false
            })
        }
        else {
            const result = await Employer.create({ employerId, companyName, contactPhone, contactEmail, location, industry, aadharNo });
            return res.status(200).json({ success:true, data:result })
        }
    } catch (error) {
        console.log(error)
    }
}

async function handleGetEmployerById(req, res) {
    try{
        if(req.params.id){
            let id = req.params.id
            let employer = await Employer.findOne({ _id: id })
            return res.status(200).json({ success: true, data:employer })
        } else {
            return res.status(401).json({ success:true, message:'Bad Request' })
        }
    } catch(error) {
        return res.json({ success:false, Error: error })
    }
}

async function handleUpdateEmployerById(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
  
      if (!id) {
        return res.status(400).json({ success: false, message: 'Employer ID is required' });
      }
  
      const updatedEmployer = await Employer.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedEmployer) {
        return res.status(404).json({ success: false, message: 'Employer not found' });
      }
  
      return res.status(200).json({ success: true, data: updatedEmployer });
    } catch (error) {
      console.log("Error while updating employer: ", error.message);
      return res.status(500).json({ success: false, message: "Server Error" });
    }
}

async function handleDeleteEmployer(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
        return res.status(400).json({ success: false, message: 'Employer ID is required' });
        }

        const deletedEmployer = await Employer.findByIdAndDelete(id);

        if (!deletedEmployer) {
        return res.status(404).json({ success: false, message: 'Employer not found' });
        }

        return res.status(200).json({ success: true, message: 'Employer deleted successfully' });
    } catch (error) {
        console.log("Error while deleting employer: ", error.message);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}

async function handleLoginEmployer(req, res) {
    const { id } = req.body
    let foundEmployer = Employer.findOne({_id: id})
    if(foundWorker) {
        let token = jwt.sign(id, 'HoHoHo')
        res.cookie('access_token', token)
        return res.status(200).json({success:true, data: foundWorker})
    } else {
        return res.status(401).json({success: false, message: "Unauthorized Request."})
    }
}

module.exports = { 
    handleRegisterEmployer, 
    handleShowEmployers,
    handleGetEmployerById,
    handleUpdateEmployerById,
    handleDeleteEmployer,
    handleLoginEmployer
}