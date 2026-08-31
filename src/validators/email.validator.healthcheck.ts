import Joi from 'joi';

export default Joi.object({
  emails: Joi.array().items(Joi.string().email()).min(1).required(),
  workspace_name: Joi.string().allow('').required(),
  product: Joi.string().required(),
  healthcheck: Joi.string().required(),
  env: Joi.string().required(),
  reason: Joi.string().allow('').max(1000).required(),
});
