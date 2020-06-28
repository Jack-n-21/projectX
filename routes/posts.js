const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');


import createPost from '../controllers/post';
import validatePost from '../middlewares/post';
import getPost from '../controllers/getpost';
import getPostid from '../controllers/getpostid';
import deleteId from '../controllers/delete'
import updatePost from '../controllers/updatepost';


router.post('/', validatePost, createPost);
router.get('/', getPost);
router.get('/:postID', getPostid);
router.delete('/:postID', deleteId);
router.patch('/:postID',updatePost );






 

module.exports = router;