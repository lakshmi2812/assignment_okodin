"use strict";
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    profileId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    email: DataTypes.STRING
  });

  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Profile, {
      foreignKey: "userId"
    });
  };

  return User;
};
