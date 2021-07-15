const User = require("../models/users.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  // Save Customer in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};

// Validar token
exports.validarToken = (token, socket) => {
  // Find By Token
  User.findByToken(token, socket)
};

