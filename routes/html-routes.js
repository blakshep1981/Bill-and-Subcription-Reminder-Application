const path = require("path");

module.exports = function(app){
// Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    if (req.user) {
      res.render("index");    
    }
    res.render("login")    
  });

  app.get("/calendar", function(req, res) {
    if (req.user) {
      res.render("calendar");
    }    
  });

  app.get("/subscriptions", function(req, res) {
    if (req.user) {
      res.render(subscriptions);
    }    
  });


}