const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const dotEnv = require('dotenv').config();

const dburl = process.env.URL;

router.get('/getData',(req,res) => {

     MongoClient.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client) => {

          if(err){
            console.log("Error", err);
          }else{

            var collection = client.db('Tiffino_db').collection('Employee');
            collection.find({}).toArray((err,result) => {

                   if(err){
                     console.log('Error',err);
                   }else{

                     var output = result.map(r => ({'Name':r.Name,'Age':r.Age,'Image':r.Image}));

                     res.send(output);
                     client.close();
                   }
            });
          }
    });

});

module.exports = router;
