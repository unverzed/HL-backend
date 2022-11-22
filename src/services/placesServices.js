import placesRepository from "../repositories/placesRepository.js";
import ticketRepository from "../repositories/ticketRepository.js";
import db from "../database/db.js";

async function insertPlaces(companyId, responsibleId, data) {
  await placesRepository.postPlaces(companyId, responsibleId, data);
}

async function showOnePlace(id) {
  const query = await placesRepository.getPlace(id);
  if (!query) {
    throw {
      type: "notfound",
      message: "place don't exist",
    };
  }

  return query;
}

export async function deleteById(id) {
  return await placesRepository.deletePlaces(id);
}

async function showAllPlaces(id) {
  const query = await placesRepository.getAllPlaces(id);
  if (query == 0) {
    throw {
      type: "notfound",
      message: "place don't exist",
    };
  }

  return query;
}

async function updateById(idLocal, data) {
  const selectResponsible = await placesRepository.getId(idLocal);
  console.log("esse é o id", selectResponsible);
  try {
    await db.query(`BEGIN`);
    const updatePlace = await placesRepository.updatePlaces(idLocal, data);
    const insertTicket = await ticketRepository.postTicket(
      idLocal,
      idResponsible,
      data
    );
    await db.query(updatePlace, insertTicket);
    await db.query(`COMMIT`);
  } catch (error) {
    await db.query(`ROLLBACK`);
    console.log(error);
  }
}

const placesService = {
  insertPlaces,
  showOnePlace,
  deleteById,
  showAllPlaces,
  updateById,
};
export default placesService;
