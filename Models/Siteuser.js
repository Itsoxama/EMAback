

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Siteuser = new Schema({
   
   
    name: {
        type: String,
        
    }
    ,
    taxes:{
        type:String,
    },
    nc:{
        type:String
    }
    ,
    
    jobn:{
        type:String
    }
    ,
    skill: {
        type: String
    },
    
    
    payrate: {
        type: String
    },
    otpayrate: {
        type: String
    },
    
});






const SiteUserd = mongoose.model('Siteuser', Siteuser);
module.exports =SiteUserd
  
