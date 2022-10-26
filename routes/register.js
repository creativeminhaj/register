//Register_routing
const express = require('express');
const {regControll} = require('../controllers/registerController');


//express_init
const router = express.Router();


router.get('/register', regControll);


//module_exports
module.exports = router;