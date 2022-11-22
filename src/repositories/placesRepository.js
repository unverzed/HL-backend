import db from "../database/db.js";

async function postPlaces(companyId, responsibleId, data) {
  const { name, CEP, neighborhood, street, number, city, state } = data;
  return db.query(
    `INSERT INTO places ( name, "CEP", neighborhood, street, number, city, state, "idCompany", "idResponsible") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
    [
      name,
      CEP,
      neighborhood,
      street,
      number,
      city,
      state,
      companyId,
      responsibleId,
    ]
  );
}

async function getAllPlaces(id) {
  const query = await db.query(
    `SELECT p.id as "placesId", "userId", p.name as "placesName", p."CEP", p.neighborhood, p.street, p.number, p.city, p.state, p."idResponsible" FROM company
      LEFT JOIN places as p ON company.id = p."idCompany"
          WHERE company.id = $1
      `,
    [id]
  );
  const result = query.rows;
  return result;
}

async function getPlace(id) {
  const query = await db.query(
    `SELECT p.id as "placesId", "userId", p.name as "placesName", p."CEP", p.neighborhood, p.street, p.number, p.city, p.state, p."idResponsible" FROM company
      LEFT JOIN places as p ON company.id = p."idCompany"
          WHERE p.id = $1
      `,
    [id]
  );
  const result = query.rows[0];
  return result;
}

async function getId(id) {
  const query = await db.query(
    `SELECT p."idResponsible" FROM company
      LEFT JOIN places as p ON company.id = p."idCompany"
          WHERE p.id = $1
      `,
    [id]
  );
  const result = query.rows[0];
  const idResp = result.idResponsible;
  return idResp;
}

export async function deletePlaces(id) {
  return db.query(
    `
    DELETE FROM places WHERE id = $1`,
    [id]
  );
}

export async function updatePlaces(id, data) {
  const { name, CEP, neighborhood, street, number, city, state, sendEmailTo } =
    data;
  return db.query(
    `UPDATE places SET "name" = $1, "CEP" = $2, "neighborhood" = $3, "street" = $4, "number" = $5, "city" = $6, "state" = $7, "sendEmailTo" = $8
    WHERE id = $9 RETURNING id`,
    [name, CEP, neighborhood, street, number, city, state, sendEmailTo, id]
  );
}

const placesRepository = {
  postPlaces,
  getAllPlaces,
  deletePlaces,
  getPlace,
  updatePlaces,
  getId
};
export default placesRepository;
