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

const authServices = { signup };
export default authServices;
