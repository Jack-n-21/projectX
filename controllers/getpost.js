import Post from '../models/posts';


const getPost = (req,res)=>{
    
    res.status(200).json({
        message : 'got all the Posts',
      // post:post
    });

}


export default getPost;