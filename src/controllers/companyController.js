import companyServices from "../services/companyServices.js";

export async function insertCompany(req, res) {
  const data = req.body;
  const { user } = res.locals;
  await companyServices.insert(user.id, data);
  res.sendStatus(201);
}
