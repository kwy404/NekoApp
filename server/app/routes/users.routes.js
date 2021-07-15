exports.routes = () => {
    //const customers = require("../controllers/users.controller.js");
    const user = require("../controllers/users.controller.js");

    app.get("/user", (req, res) => 
    {
      res.status(200).send({
      message: "USER API"
    }
    )}
    );
  
  };

exports.user = require("../controllers/users.controller.js");
  