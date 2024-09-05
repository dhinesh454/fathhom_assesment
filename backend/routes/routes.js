const userController = require('../controllers/userController');
const healthController = require('../controllers/healthController');
const authenticationMiddleware = require('../middleware/authentication')

const express = require('express');
const routes = express.Router();


routes.post('/register',userController.addUserRegistration);
routes.post('/login',userController.loginUser);
routes.delete('/delete/:id',authenticationMiddleware.authenticate,healthController.deleteHealth);
routes.post('/health',authenticationMiddleware.authenticate,healthController.addUserHealth);
routes.get('/gethealth',authenticationMiddleware.authenticate,healthController.getHealth)



module.exports=routes







