 import Joi from "joi"


const userValidator = Joi.object({

 name: Joi.string().required(),
 username: Joi.string().required(),
 email: Joi.required(),
 phone: Joi.number().required()

})

 export {
 userValidator
 }