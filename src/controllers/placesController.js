import placesServices from "../services/placesServices.js";

export async function sendPlaces(req, res) {
  const data = req.body;
  const id = parseInt(req.params.id);
  await placesServices.insertPlaces(id, data);
  res.sendStatus(201);
}

export async function allPlaces(req, res) {
  const id = parseInt(req.params.id);
  const places = await placesServices.showPlaces(id);
  res.status(200).send(places);
}
