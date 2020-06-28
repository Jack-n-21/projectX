const express = require('express');
const app = express();
const postRoutes = require('./routes/posts');
const bodyparser = require('body-parser');
const mongoose= require('mongoose');
const config = require('./helpers/config');
const MongoClient = require('mongodb').MongoClient;

mongoose.connect(config.dburl,{useUnifiedTopology: true, useNewUrlParser: true, useMongoClient: true}, function (err, db) {
   
     if(err) throw err;

     else(console.log('Connected to mongo'))
                
});
mongoose.connection.on('connect', ()=>console.log('Connected to mongo'));
mongoose.connection.on('error', err=>console.log('error connecting to mongo db'+ err));
const joi = require('joi');
app.use(bodyparser.json()); //middleware

app.use('/posts',postRoutes);

module.exports = app;