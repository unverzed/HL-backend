import jwt from "jsonwebtoken";
import db from "../database/db.js";

export async function tokenValidator(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "").trim();
  const secretKey = process.env.JWT_SECRET;

  try {
    const decoded = jwt.verify(token, secretKey);
    const query = await db.query(`SELECT * FROM users WHERE id = $1`, [decoded.id]);
    const user = query.rows[0];

    if (!user) {
      return res.status(401).json({
        message: "Invalid token user",
      });
    }

    res.locals.user = user;

    next();
  } catch (e) {
    console.log(e);
  }
}
