import Joi from "joi";

export function validateData(file) {
  const schema = Joi.object({
    fileName: Joi.string().min(3).max(30).required(),
    content: Joi.string().min(3).max(30).required(),
  });

 return schema.validate(file);
}

