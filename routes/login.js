var express = require("express");
var router = express.Router();

//allow usage of database via sequelizer
var models = require("../models");
var User = models.User;
var Profile = models.Profile;
var sequelize = models.sequelize;

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.render("login");
});

router.post('/login', (req, res) => {

  // Filter params
  var userParams = {
    username: req.body.username,
    email: req.body.email,
    profileId:90
  };
  // ...

  // Begin transaction
  sequelize.transaction((t) => {

    // Don't create a user if
    // already exists
    return User.findOrCreate({
      defaults: userParams,
      where: { email: userParams.email },
      transaction: t
    })

    // //User.findOrCreate({
    //   defaults: {username:"dave"},
    //   where: { email: "hkka@gmail.com"}
    // })
    //
    // Executing other queries...

      // .catch((e) => {
      //
      //   // Display validation errors if we
      //   // have them
      //   if (e.errors) {
      //     e.errors.forEach((err) => req.flash('error', err.message));
      //     res.redirect('/');
      //   } else {
      //     res.status(500).send(e.stack);
      //   }
      // });
  //})//.then(result=>{console.log(result)});

});

module.exports = router;
