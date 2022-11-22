import joi from "joi";

export const responsibleSchema = joi.object({
  name: joi.string().required(),
  phone: joi.string().length(10).required(),
  CEP: joi.string().required(),
  neighborhood: joi.string().required(),
  street: joi.string().required(),
  number: joi.number().required(),
  city: joi.string().required(),
  state: joi.string().required(),
  isMainResponsible: joi.boolean()
});
