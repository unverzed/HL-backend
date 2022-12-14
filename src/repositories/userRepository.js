import db from "../database/db.js";

export async function signup(user) {
  const { name, email, password } = user;
  return db.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
    [name, email, password]
  );
}

export async function checkEmail(user) {
  const { email } = user;
  return db.query("SELECT * FROM users WHERE email = $1", [email]);
}

const userRepository = { signup, checkEmail };
export default userRepository;
