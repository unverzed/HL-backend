import placesRepository from "../repositories/placesRepository.js";

async function insertPlaces(id, data) {
  await placesRepository.postPlaces(id, data);
}

async function showPlaces(id) {
  return await placesRepository.getPlaces(id);
}

const placesService = { insertPlaces, showPlaces };
export default placesService;
