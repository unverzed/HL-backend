import responsibleRepository from "../repositories/responsibleRepository.js";

export async function insert(id, data) {
  await responsibleRepository.postResponsible(id, data);
}

export async function get(id) {
  const responsible = await responsibleRepository.getResponsibles(id);
  if(!responsible){
    throw {
      type: "notfound",
      message: "Can't find responsibles",
    };
  }
}

const responsibleServices = { insert, get };
export default responsibleServices;
