import Joi from'joi';
export const notePayloadSchema = Joi.object({
  title: Joi.string().required().max(50),
  body: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
});

export const noteQuerySchema = Joi.object({
  search: Joi.string().optional(),
});

export const noteUpdatePayloadSchema = Joi.object({
  title: Joi.string().required().max(50),
  body: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
});