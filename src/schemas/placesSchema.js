import joi from "joi";

export const placesSchema = joi.object({
  name: joi.string().required(),
  CEP: joi.string().length(8).required(),
  neighborhood: joi.string().required(),
  street: joi.string().required(),
  number: joi.number().required(),
  city: joi.string().required(),
  state: joi.string().required(),
});