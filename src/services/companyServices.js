import companyRepository from "../repositories/companyRepository.js";

export async function insert(id, data) {
  await companyRepository.postCompany(id, data);
}

export async function get(id) {
  return await companyRepository.getCompany(id);
}

export async function getById(id) {
  return await companyRepository.getCompanyById(id);
}

export async function updateById(id, data) {
  return await companyRepository.updateCompany(id, data);
}

export async function deleteById(id) {
  return await companyRepository.deleteCompany(id);
}

const companyServices = { insert, get, getById, updateById, deleteById };
export default companyServices;
