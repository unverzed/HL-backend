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
  const query = await db.query(
    `SELECT company.id as "companyId", "userId", company.name as "companyName", "CNPJ", description, r.id as "responsibleId", r.name as "responsibleName", phone, r."CEP" as "responsiblesCEP", r.neighborhood, r.street, r.number, r.city, r.state, "isMainResponsible" FROM company
    LEFT JOIN responsibles as r ON company.id = r."idCompany"
    WHERE company.id = $1
    `,
    [id]
  );
  const result = query.rows;
  return result;

}

export async function updateCompany(id, data) {
  const { name, CNPJ, description } = data;
  return db.query(
    `UPDATE company SET name = $1, "CNPJ" = $2, description = $3 WHERE id = $4`,
    [name, CNPJ, description, id]
  );
}

export async function deleteCompany(id) {
  return db.query(
    `
    DELETE FROM company WHERE id = $1`,
    [id]
  );
}

const companyRepository = {
  postCompany,
  getCompany,
  getCompanyById,
  updateCompany,
  deleteCompany,
};
export default companyRepository;
