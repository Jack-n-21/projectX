const Joi = require('joi');

const validatePost = (req, res, next)=>{
    const schema = Joi.object().keys({
      //  id: Joi.string().required(),
        slug: Joi.string().required(),
        poster: Joi.string().required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        createdAt: Joi.date().required(),
        updatedAt: Joi.date().required(),
    });

    Joi.validate(req.body, schema, (error, value)=>{
        if (error) {
            // send a 422 error response if validation fails
            res.status(422).json({
                status: '422',
                message: 'Invalid request data',
                error: error.message
            });
        } else {
            next();
        } 
    })
}

export default validatePost;