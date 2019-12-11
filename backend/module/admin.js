const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const admin = require("../schema/admin");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
router.post("/admin-register", (req, res) => {
  admin.findOne({ email: req.body.email }).then(admin => {
    if (admin) {
      res
        .status(400)
        .json({ email: "sorry try anather email this already exists" });
    }
  });
  const newAdmin = new admin({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
      if (err) throw err;
      newAdmin.password = hash;
      newAdmin
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    });
  });
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  admin.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});
module.exports = router;
