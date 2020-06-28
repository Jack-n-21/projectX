const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const Post = require('../models/posts');

import createPost from '../controllers/post';
import validatePost from '../middlewares/post';
import getPost from '../controllers/getpost';
import getPostid from '../controllers/getpostid';
import deleteId from '../controllers/delete'


router.post('/', validatePost, createPost);
router.get('/', getPost);
router.get('/:postID', getPostid);
router.delete('/:postID', deleteId);

router.patch('/:postID', (req,res,next)=>{
    const id = req.body.id;
    res.status(200).json({
        message : 'updated post',
        post: post

    });
});

router.delete('/:postID', (req,res,next)=>{
    res.status(200).json({
        message : 'delete request'
    });
});


 

module.exports = router;