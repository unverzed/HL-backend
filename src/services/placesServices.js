import placesRepository from "../repositories/placesRepository.js";

async function insertPlaces(companyId, responsibleId, data) {
  await placesRepository.postPlaces(companyId, responsibleId, data);
}

async function showPlaces(id) {
  return await placesRepository.getPlaces(id);
}

export async function deleteById(id) {
  return await placesRepository.deletePlaces(id);
}

const placesService = { insertPlaces, showPlaces, deleteById  };
export default placesService;
