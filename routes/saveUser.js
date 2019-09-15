const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const dotEnv = require('dotenv').config();

const dburl = process.env.URL;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));


router.post('/saveData',(req,res) => {

MongoClient.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client) => {

     var data = {

          Name:req.body.Name,
          Age:req.body.Age

     };

        if(err){
          console.log("Error",err);
        }else{

          var collection = client.db('Tiffino_db').collection('Employee');

          collection.insertOne(data,(err,resp) => {

               if(err){
                 console.log("Error",err);
               }else{

                 res.send("Data added");
                 client.close();
               }

          });
        }
   });

});

module.exports = router;
