import responsibleRepository from "../repositories/responsibleRepository.js";

export async function insert(id, data) {
  await responsibleRepository.postResponsible(id, data);
}

export async function get(id) {
  const query = await responsibleRepository.getResponsibles(id);
  if (!query) {
    throw {
      type: "notfound",
      message: "responsible don't exist",
    };
  }
  return query;
}

const responsibleServices = { insert, get };
export default responsibleServices;
