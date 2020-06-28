import { post } from '../app';

const express = require('express');
const app = express();
const postRoutes = require('./routes/posts');
const bodyparser = require('body-parser');
const mongoose= require('mongoose');
const config = require('./helpers/config');
const MongoClient = require('mongodb').MongoClient;



const mongoose= require('mongoose');

const deleteId =(req,res)=>{
    const id = req.params.postID;

    

        

};

export default deleteId;