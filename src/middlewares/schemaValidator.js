import db from "../database/db.js";
import signupSchema from "../schemas/authSchema.js";

export async function schemaValidator(req, res, next) {
  const data = req.body;

  const validation = signupSchema.validate(data);
  if (validation.error) {
    return res.sendStatus(400);
  }

  try {
    const userExists = await db.query(`SELECT * FROM users where email = $1`, [
      data.email,
    ]);
    if (userExists.rows[0]) {
      return res.sendStatus(409);
    }
  } catch (e) {
    return res.status(500).send(e);
  }

  next();
}
