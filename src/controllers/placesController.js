import placesServices from "../services/placesServices.js";

export async function sendPlaces(req, res) {
  const data = req.body;
  const companyId = parseInt(req.params.id);
  const responsibleId = req.params.id2;
  await placesServices.insertPlaces(companyId, responsibleId, data);
  res.sendStatus(201);
}

export async function allPlaces(req, res) {
  const id = parseInt(req.params.id);
  const places = await placesServices.showPlaces(id);
  res.status(200).send(places);
}

export async function deletePlace(req, res) {
  const id = parseInt(req.params.id);
  await placesServices.deleteById(id);
  res.sendStatus(200);
}