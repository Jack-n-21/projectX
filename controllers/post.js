const Post = require ('../models/posts');
const mongoose= require('mongoose');

const createPost = (req, res)=>{
   
   const post = new Post({
    _id: new mongoose.Types.ObjectId,
    slug: req.body.slug,
    poster: req.body.poster,
    title: req.body.title,
    description: req.body.description,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt
   });
 
    post.save()
    .then ( result=>{
        console.log(result); 
    })
    .catch(err=>{
        console.log(err);
    })
    res.status(201).json({
        status: '201',
        message: 'post created successfully',
        createPost: post
    });
}

export default createPost;
