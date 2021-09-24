const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 6;

module.exports = {
  create,
  login,
  verify,
};

async function create(req, res) {
  const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);

  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });


    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "1h" });
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!(await bcrypt.compare(req.body.password, user.password)))
      throw new Error("Wrong password");


    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "1hr" });

    res.status(200).json(token);
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err);
  }
}

function verify(req, res) {
  res.json(req.user);
}

