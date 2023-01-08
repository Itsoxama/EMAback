// Importing important Siteuserds
const express = require('express');
const app = express();
const Siteroute = express.Router();
let Siteuserd = require('../Models/Siteuser');
var nodemailer = require('nodemailer');



Siteroute.route('/update').post(function(req, res) {
    Siteuserd.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            Siteuserdname:req.body.Siteuserdname,
            fullname:req.body.fullname,



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
    

    
});

Siteroute.route('/add').post(function(req, res) {

    let Siteuserds = new Siteuserd(req.body);
    Siteuserds.save()
        .then(Siteuserd => {
            res.status(200).json({'Siteuserd': 'Siteuserd added successfully'});
        })
        .catch(err => {
          console.log("erer")
        });
});


Siteroute.route('/getall').get(function(req, res) {

    Siteuserd.find(
        { }, 

       
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
});


Siteroute.route('/find').post(function(req, res) {
    Siteuserd.find(
        { Siteuserd_id:req.body.Siteuserd_id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
    

    
});











module.exports = Siteroute;
