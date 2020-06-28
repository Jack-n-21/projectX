
import Post from '../models/posts';
const mongoose= require('mongoose');
const getPostid = (req,res)=>{
  
    const id = req.params.postID;
    Post.findById(id)
    .exec()
    .then(doc =>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
        
        
        );

        
    // res.status(200).json({
    //     message: 'get post by id',
    //     po
    // });

}
export default getPostid;