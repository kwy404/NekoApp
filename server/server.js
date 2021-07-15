const { user } = require('./app/routes/users.routes');

const express = require("express");
const bodyParser = require("body-parser");
const socket = require("./socket");
const autoLoad = require("./autoload/start");

const app = express();



// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "NekoApp." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  autoLoad();
  socket({
    login: user.login,
    validarToken: user.validarToken
  });
});