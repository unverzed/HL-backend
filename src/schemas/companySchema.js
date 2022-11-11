import joi from "joi";

export const companySchema = joi.object({
name: joi.string().required(),
CNPJ: joi.string().length(14).required(),
description: joi.string().allow(null, ''),
});

