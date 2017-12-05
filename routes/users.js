var express = require("express");
var router = express.Router();

//allow usage of database via sequelizer
var models = require("../models");
var User = models.User;
var Profile = models.Profile;
var sequelize = models.sequelize;

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/:id", function(req, res, next) {
  User.findById(req.params.id, {
    include: [{model: Profile}]
  })
    .then(user => {
      res.render("profile", {user: user, profile: user.Profile});
    })
    .catch(e => res.status(500).send(e.stack));
});

router.get("/search", function(req, res, next) {});

module.exports = router;
