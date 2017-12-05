"use strict";
module.exports = (sequelize, DataTypes) => {
  var Profile = sequelize.define("Profile", {
    userId: DataTypes.INTEGER,
    pets: DataTypes.STRING,
    education: DataTypes.STRING,
    age: DataTypes.INTEGER,
    distance: DataTypes.INTEGER,
    city: DataTypes.STRING,
    talents: DataTypes.STRING,
    favorites: DataTypes.STRING,
    kids: DataTypes.BOOLEAN,
    whyyoushouldmessageme: DataTypes.STRING,
    gender: DataTypes.STRING,
    martialstatus: DataTypes.STRING,
    bodytype: DataTypes.STRING,
    heightfeet: DataTypes.INTEGER,
    heightinches: DataTypes.INTEGER,
    occupation: DataTypes.STRING
  });

  Profile.associate = function(models) {
    // associations can be defined here
    Profile.hasOne(models.User, {
      foreignKey: "profileId"
    });
  };

  return Profile;
};
