import placesRepository from "../repositories/placesRepository.js";

async function insertPlaces(companyId, responsibleId, data) {
  await placesRepository.postPlaces(companyId, responsibleId, data);
}

async function showPlaces(id) {
  return await placesRepository.getPlaces(id);
}

const placesService = { insertPlaces, showPlaces };
export default placesService;
