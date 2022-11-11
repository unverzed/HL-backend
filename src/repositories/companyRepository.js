import db from "../database/db.js";

export async function postCompany(id, data) {
  const { name, CNPJ, description } = data;
  return db.query(
    `INSERT INTO company ("userId", name, "CNPJ", description) VALUES ($1, $2, $3, $4)`,
    [id, name, CNPJ, description]
  );
}

const companyRepository = { postCompany };
export default companyRepository;
