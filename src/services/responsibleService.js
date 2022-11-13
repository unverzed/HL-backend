import responsibleRepository from "../repositories/responsibleRepository.js";

export async function insert(id, data) {
  await responsibleRepository.postResponsible(id, data);
}

const responsibleServices = { insert };
export default responsibleServices;
