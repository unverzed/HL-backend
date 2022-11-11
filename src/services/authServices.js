import userRepository from "../repositories/userRepository.js";
import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

export async function signup(user) {
  const { name, email, password } = user;
  const SALT = 10;
  user.password = await bcrypt.hash(password, SALT);
  await userRepository.signup(user);
}

export async function login(user) {

    const query = await userRepository.checkEmail(user);
    const result = query.rows[0];

  const token = jwt.sign(
    { id: result.id, email: result.email },
    process.env.JWT_SECRET,
    { expiresIn: 30 * 30 }
  );
  return { token };
}

const authServices = { signup, login };
export default authServices;
