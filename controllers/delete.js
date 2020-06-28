import { result } from 'lodash';

const Post = require('../models/posts');

const deleteId =(req,res)=>{
    const id = req.params.postID; 
    Post.remove({_id: id})
    .exec()
    .then(result =>{
        res.status(200).json(result);

    }) 
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })      

};

export default deleteId;