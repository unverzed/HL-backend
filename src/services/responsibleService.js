import responsibleRepository from "../repositories/responsibleRepository.js";

export async function insert(id, data) {
  await responsibleRepository.postResponsible(id, data);
}

export async function get(id) {
  return await responsibleRepository.getResponsibles(id);
}

const responsibleServices = { insert, get };
export default responsibleServices;
