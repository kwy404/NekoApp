const sql = require("./db.js");

// constructor
const User = function(user) {
  this.email = user.email;
  this.name = user.username;
  this.active = user.password;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findByToken = (token, voidFunc) => {
  sql.query(`SELECT * FROM users WHERE token = ?`, (token), (err, res) => {
    if (err) {
      return;
    }
    if (res.length) {
      voidFunc(res[0])
    }
  });
};

module.exports = User;
