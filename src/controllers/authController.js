import authServices from "../services/authServices.js";

export async function signup(req, res) {
  const user = req.body;
  await authServices.signup(user);
  res.sendStatus(201);
}

export async function login(req, res) {
  const user = req.body;
  const token = await authServices.login(user);
  res.status(200).send(token);
}
