import db from "../database/db.js";

async function postPlaces(id, data) {
  const { name, CEP, idResponsible } = data;
  return db.query(
    `INSERT INTO places ( name, "CEP", "idResponsible", "idCompany") VALUES ($1, $2, $3, $4)`,
    [name, CEP, idResponsible, id]
  );
}

async function getPlaces(id) {
  const query = await db.query(
    `SELECT p.id as "placesId", "userId", p.name as "placesName", p."CEP", p."idResponsible" FROM company
      LEFT JOIN places as p ON company.id = p."idCompany"
          WHERE company.id = $1
      `,
    [id]
  );
  const result = query.rows;
  return result;
}

const placesRepository = { postPlaces, getPlaces };
export default placesRepository;
