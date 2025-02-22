const express = require('express')

const { handleRegisterWorker, handleShowWorkers, 
    handleGetWorkerById, handleUpdateWorkerById, 
    handleDeleteWorker, 
    handleLoginWorker} = require('../controllers/worker.controller')
const { handleRegisterEmployer, handleShowEmployers, 
    handleGetEmployerById, handleUpdateEmployerById, 
    handleDeleteEmployer, 
    handleLoginEmployer} = require('../controllers/employer.controller')
const { handleRegisterJob, handleShowJobs, handleUpdateJobById, 
    handleGetJobById, handleDeleteJobById } = require('../controllers/job.controller')

const Router = express.Router()
const authRouter = express.Router()


Router.route('/workers')
    .get(handleShowWorkers)
    .post(handleRegisterWorker)
Router.route('/worker/:id')
    .patch(handleUpdateWorkerById)
    .get(handleGetWorkerById)
    .delete(handleDeleteWorker)

authRouter.route('/worker')
    .post(handleLoginWorker)
authRouter.route('/employer')
    .post(handleLoginEmployer)



Router.route('/employers')
    .get(handleShowEmployers)
    .post(handleRegisterEmployer)
Router.route('/employer/:id')
    .patch(handleUpdateEmployerById)
    .get(handleGetEmployerById)
    .delete(handleDeleteEmployer)



Router.route('/jobs')
    .get(handleShowJobs)
    .post(handleRegisterJob)
Router.route('/job/:id')
    .patch(handleUpdateJobById)
    .get(handleGetJobById)
    .delete(handleDeleteJobById)


module.exports = { Router, authRouter }