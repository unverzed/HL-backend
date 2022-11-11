import authServices from "../services/authServices.js";

export async function signup(req, res) {
  const user = req.body;
  await authServices.signup(user);
  res.sendStatus(201);
}
