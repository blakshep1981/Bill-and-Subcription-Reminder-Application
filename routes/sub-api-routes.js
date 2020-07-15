var db = require("../models");

module.exports = function(app){
console.log("sub route api")
app.get("/api/subs",function(req,res){
    var subs = {};
    if (req.subs.user_id){
        subs.UserId = req.subs.user_id;
    }
    db.Subscription.findAll({
        where: subs,
        include: [db.User],
    }).then(function(dbSubs){
        res.json(dbSubs)
    });
});
app.get("/api/subs/:id", function(req,res){
    db.Subscription.findOne({
        where: {
            id: req.params.id
        },
        include: [db.User]
    }).then(function(dbPost){
        res.json(dbSubs)
    });
});

app.post("/api/sub",function(req, res){
    db.Post.create(req.body).then(function(dbSubs){
        res.json(dbSubs);
    });
});

app.delete("/api/subs",function(req,res){
    db.Subscription.update(
        req.body,
        {
            where: {
                id: req.body.id
            }
        }).then(function(dbSubs){
            res.json(dbSubs);
        });
});

app.put("/api/subs",function(req,res){
    db.Subscription.update(
        req.body,
        {
            where: {
                id: req.body.id
            }
        }).then(function(dbSubs){
            res.json(dbSubs)
        })
})

}