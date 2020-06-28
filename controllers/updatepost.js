import Post from '../models/posts';
const updatePost= (req,res)=>{
    const id = req.params.postID; 
    Post.update({_id: id}, {$set: {
        slug: req.body.slug,
    poster: req.body.poster,
    title: req.body.title,
    description: req.body.description,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt
    }})
    .exec()
    .then(result =>{
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });

    })


}
export default updatePost;