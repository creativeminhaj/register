//controllers
const path = require('path');


const regControll = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'))
}


//module_exports
module.exports ={
    regControll,
}