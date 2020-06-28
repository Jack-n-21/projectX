import Post from '../models/posts';


const getPost = (req,res)=>{
  Post.find()
  .exec()
  .then(docs =>{
    console.log(docs)
    if (docs.length>=0){
    res.status(200).json(docs)
    }
    else{
      res.status(404).json({
        message: 'item not found'
      })
    }
  })
  .catch(

    err =>{
      console.log(err);
      res.status(500).json({
          error: err
      })
  }
  )
}
  
export default getPost;