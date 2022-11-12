import companyRepository from "../repositories/companyRepository.js";

export async function insert(id, data) {
  await companyRepository.postCompany(id, data);
}

export async function get(id){
  return await companyRepository.getCompany(id);
}

export async function getById(id){
  const company = await companyRepository.getCompanyById(id);
  if(!company){
    console.log("Not found");
  }
}

const companyServices = { insert, get, getById };
export default companyServices;
