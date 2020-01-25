var express = require("express");
var app = express.Router();
var User = require("../../models/user");

app.post("/createuser", (req, res) => {
  const newUser = new User({
    firebaseUID: req.body.firebaseUID,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
  User.findOne({
    firebaseUID: req.body.firebaseUID
  }).then(user => {
    if (user) {
      return res.status(400).json({
        error: "User Already Exists"
      });
    } else {
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
  });
});
module.exports = app;
