import companyServices from "../services/companyServices.js";

export async function insertCompany(req, res) {
  const data = req.body;
  const { user } = res.locals;
  await companyServices.insert(user.id, data);
  res.sendStatus(201);
}

export async function getCompany(req, res) {
  const { user } = res.locals;
  const companies = await companyServices.get(user.id);
  res.status(200).send(companies);
}

export async function getCompanyById(req, res) {
  const id = parseInt(req.params.id);
  const company = await companyServices.getById(id);
  res.status(200).send(company);
}

export async function updateCompany(req, res) {
  const id = parseInt(req.params.id);
  const data = req.body;
  await companyServices.updateById(id, data);
  res.sendStatus(201);
}

export async function deleteCompany(req, res) {
  const id = parseInt(req.params.id);
  await companyServices.deleteById(id);
  console.log(id)
  res.sendStatus(200);
}
