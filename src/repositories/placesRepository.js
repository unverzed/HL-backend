import db from "../database/db.js";

async function postPlaces(companyId, responsibleId, data) {
  const { name, CEP } = data;
  console.log(companyId, responsibleId)
  return db.query(
    `INSERT INTO places ( name, "CEP", "idCompany", "idResponsible") VALUES ($1, $2, $3, $4)`,
    [name, CEP, companyId, responsibleId]
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
