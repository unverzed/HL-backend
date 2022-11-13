import responsibleServices from "../services/responsibleService.js";

export async function insertResponsible(req, res) {
    const data = req.body;
    const companyId = parseInt(req.params.id);
    await responsibleServices.insert(companyId, data);
    res.sendStatus(201);
  }
  