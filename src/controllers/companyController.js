import companyServices from "../services/companyServices.js";
import companyRepository from "../repositories/companyRepository.js";

export async function insertCompany(req, res) {
  const data = req.body;
  const { user } = res.locals;
  await companyServices.insert(user.id, data);
  res.sendStatus(201);
}

export async function getCompany(req, res) {
  const { user } = res.locals;
  const companies = await companyRepository.getCompany(user.id);
  res.status(200).send(companies);
}
