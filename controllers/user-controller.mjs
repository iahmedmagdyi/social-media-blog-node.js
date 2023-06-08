import User from "../models/userModel.mjs";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res, next) => {
  let users;

  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    res.status(404).json({ message: "No users found" });
  }
  return res.status(200).json({ users });
  next();
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hashSync(password);

  const user = new User({
    name,
    email,
    password: hashedPassword,
 
  });
  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "User does not exist" });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid password" });
  }
  return res.status(200).json({ message: "login successfuly" });
};
