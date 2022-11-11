import companyRepository from "../repositories/companyRepository.js";

export async function insert(id, data) {
  await companyRepository.postCompany(id, data);
}

const companyServices = { insert };
export default companyServices;
