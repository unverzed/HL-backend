import db from "../database/db.js";

async function postPlaces(id, data) {
  const { name, CEP, idResponsible } = data;
  return db.query(
    `INSERT INTO places ( name, "CEP", "idResponsible", "idCompany") VALUES ($1, $2, $3, $4)`,
    [name, CEP, idResponsible, id]
  );
}

const placesRepository = { postPlaces };
export default placesRepository;
