const express = require("express");
const router = express.Router();
const axios = require("axios");
const bcrypt = require("bcrypt");

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

	const newUser = new User({
		name: user.name,
		password: user.password
	});

	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) throw err;
			newUser.password = hash;
			newUser
				.save()
				.then(user => res.json(user))
				.catch(err => console.log(err));
		});
	});
});

module.exports = router;
