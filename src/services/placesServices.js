import placesRepository from "../repositories/placesRepository.js";

async function insertPlaces(id, data) {
  await placesRepository.postPlaces(id, data);
}

const placesService = { insertPlaces };
export default placesService;
