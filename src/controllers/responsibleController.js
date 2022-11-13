import responsibleServices from "../services/responsibleService.js";

export async function insertResponsible(req, res) {
  const data = req.body;
  const companyId = parseInt(req.params.id);
  await responsibleServices.insert(companyId, data);
  res.sendStatus(201);
}

export async function getResponsible(req, res) {
  const companyId = parseInt(req.params.id);
  const responsible = await responsibleServices.get(companyId);
  res.status(200).send(responsible);
}
