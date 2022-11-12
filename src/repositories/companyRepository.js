import db from "../database/db.js";

export async function postCompany(id, data) {
  const { name, CNPJ, description } = data;
  return db.query(
    `INSERT INTO company ("userId", name, "CNPJ", description) VALUES ($1, $2, $3, $4)`,
    [id, name, CNPJ, description]
  );
}

export async function getCompany(id) {
  const query = await db.query(`SELECT * FROM company WHERE "userId" = $1`, [
    id,
  ]);
  const result = query.rows;
  return result;
}

export async function getCompanyById(id) {
  const query = await db.query(`SELECT * FROM company WHERE id = $1`, [
    id,
  ]);
  const result = query.rows[0];
  return result;
}


const companyRepository = { postCompany, getCompany, getCompanyById };
export default companyRepository;
