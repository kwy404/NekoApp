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
  sql.query(`SELECT * FROM users WHERE token = ?`, [token], (err, res) => {
    if (err) {
      return;
    }
    if (res.length) {
      voidFunc(res[0])
    }
  });
};

function generate_token(length){
  //edit the token allowed characters
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  var b = [];  
  for (var i=0; i<length; i++) {
      var j = (Math.random() * (a.length-1)).toFixed(0);
      b[i] = a[j];
  }
  return b.join("");
}

User.updateToken = (username, token, voidFunc) => {
  sql.query("UPDATE users SET token = ? WHERE username = ?", [token, username], (err, res) => {
    if(err){
      return
    }
    voidFunc(token)
  })
}

User.login = (data, voidFunc) => {
  const sha1 = require('sha1');
  const password = sha1(data.password)
  sql.query(`SELECT * FROM users WHERE username = ? AND password = ?`, [data.username, password], (err, res) => {
    if (err) {
      voidFunc({error: true, message: `Algum erro aconteceu.`, type: `login`})
      return;
    }
    if (res.length) {
      const tokenGenerate = generate_token(244)
      User.updateToken(data.username, tokenGenerate, voidFunc)
    } else{
      voidFunc({error: true, message: `Login ou senha invalidos.`, type: `login`})
    }
  });
};

module.exports = User;
