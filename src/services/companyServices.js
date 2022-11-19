import companyRepository from "../repositories/companyRepository.js";

export async function insert(id, data) {
  await companyRepository.postCompany(id, data);
}

export async function get(id) {
  const query = await companyRepository.getCompany(id);
  if (query.length == 0) {
    throw {
      type: "notfound",
      message: "don't exist company",
    };
  }
  return query;
}

export async function getById(id) {
  const query = await companyRepository.getCompanyById(id);
  if (query.length == 0) {
    throw {
      type: "notfound",
      message: "don't exist company",
    };
  }
  return query;
}

export async function updateById(id, data) {
  return await companyRepository.updateCompany(id, data);
}

export async function deleteById(id) {
  return await companyRepository.deleteCompany(id);
}

const companyServices = { insert, get, getById, updateById, deleteById };
export default companyServices;
