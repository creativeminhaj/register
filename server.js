//main_server
const express = require('express');
const colors = require('colors');
const path = require('path');
const pagerouter = require('./routes/register');
const dotenv = require('dotenv');




//express_init
const app = express();


//configuration
dotenv.config();
const PORT = process.env.PORT || 4500;

//data_manage
app.use(express.json());
app.use(express.urlencoded({extended: false}));



//folder_static
app.use(express.static('./public'));


//get_router
app.use(pagerouter);

//server_listen
app.listen(PORT, () =>{
  console.log(`server running on port ${PORT}`.red.bgGreen);
});