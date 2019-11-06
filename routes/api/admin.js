const express = require("express");
const router = express.Router();
const axios = require("axios");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// @route 	POST api/admin/login
// @access 	Public
// @desc 		login
router.post("/login", async (req, res) => {
  const user = req.user;
  const url = ``;

  try {
    await axios.get(url).then(async doc => {
      const result = "";
      res.json(result);
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// @route 	POST api/admin/logout
// @access 	Public
// @desc 		logout
router.post("/logout", async (req, res) => {
  const url = ``;
  try {
    await axios.get(url).then(async doc => {
      const result = "";
      res.json(result);
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// @route 	POST api/admin/newuser
// @access 	Public
// @desc 		new user
router.post("/newuser", async (req, res) => {
  const user = req.user;
  let pw = "";

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      pw = hash;
    });
  });

  const newUser = {
    name: user.name,
    password: pw
  };

  const url = ``;
  try {
    await axios.get(url).then(async doc => {
      const result = "";
      res.json(result);
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
