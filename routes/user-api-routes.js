var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  console.log("post post sign up");

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/api/users", function (req, res) {
    db.User.findAll({ include: [db.Subscription] }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.get("api/users/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Post],
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users/:id", function(req,res){
<<<<<<< HEAD
db.User.create(req.body).then(function(dbUser){
=======
    db.User.create(req.body).then(function(dbUser){
>>>>>>> 3bf21c3bf4ea9e415e412a5f8127d5497f9485ed
  res.json(dbUser);
})
  })

  app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
};
