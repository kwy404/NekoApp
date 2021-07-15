module.exports = app => {
    //const customers = require("../controllers/users.controller.js");
    const user = require("../controllers/users.controller.js");
  
    // Create a new Customer
    app.post("/user", user.create);
    app.get("/user", (req, res) => 
    {
      res.status(200).send({
      message: "USER API"
    }
    )}
    );
  };
  