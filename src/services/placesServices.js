import placesRepository from "../repositories/placesRepository.js";

async function insertPlaces(companyId, responsibleId, data) {
  await placesRepository.postPlaces(companyId, responsibleId, data);
}

async function showPlaces(id) {
  const query = await placesRepository.getPlaces(id);
  if (query == 0) {
    throw {
      type: "notfound",
      message: "place don't exist",
    };
  }

  return await placesRepository.getPlaces(id);
}

export async function deleteById(id) {
  return await placesRepository.deletePlaces(id);
}

const placesService = { insertPlaces, showPlaces, deleteById  };
export default placesService;
