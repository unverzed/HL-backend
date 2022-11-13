import db from "../database/db.js";

export async function postResponsible(id, data) {
  const { name, phone, CEP, isMainResponsible } = data;
  return db.query(
    `INSERT INTO responsibles (name, phone, "CEP", "isMainResponsible", "idCompany") VALUES ($1, $2, $3, $4, $5)`,
    [name, phone, CEP, isMainResponsible, id]
  );
}

export async function getResponsibles(id) {
  const query = await db.query(
    `SELECT * FROM responsibles WHERE "idCompany" = $1`,
    [id]
  );
  const result = query.rows[0];
  return result;
}

const responsibleRepository = { postResponsible, getResponsibles };
export default responsibleRepository;
