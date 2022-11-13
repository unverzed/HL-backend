import db from "../database/db.js";

export async function postResponsible(id, data) {
  const { name, phone, CEP, isMainResponsible } = data;
  return db.query(
    `INSERT INTO responsibles (name, phone, "CEP", "isMainResponsible", "idCompany") VALUES ($1, $2, $3, $4, $5)`,
    [name, phone, CEP, isMainResponsible, id]
  );
}

const responsibleRepository = { postResponsible };
export default responsibleRepository;
