import joi from "joi";

export const responsibleSchema = joi.object({
  name: joi.string().required(),
  phone: joi.string().length(8).required(),
  CEP: joi.string().length(8).required(),
  isMainResponsible: joi.boolean(),
});
