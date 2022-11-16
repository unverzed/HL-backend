import joi from "joi";

export const placesSchema = joi.object({
  name: joi.string().required(),
  CEP: joi.string().length(8).required()
});