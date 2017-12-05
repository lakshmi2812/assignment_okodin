'use strict';
module.exports = (sequelize, DataTypes) => {
  var Location = sequelize.define('Location', {
    distance: DataTypes.INTEGER,
    city: DataTypes.STRING
  }
  return Location;
};
