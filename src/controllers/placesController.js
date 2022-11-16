import placesServices from "../services/placesServices.js";

export async function sendPlaces(req, res) {
  const data = req.body;
  const id = parseInt(req.params.id);
  await placesServices.insertPlaces(id, data);
  res.sendStatus(201);
}