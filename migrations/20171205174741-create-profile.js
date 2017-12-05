"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Profiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      pets: {
        type: Sequelize.STRING
      },
      education: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      distance: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      talents: {
        type: Sequelize.STRING
      },
      favorites: {
        type: Sequelize.STRING
      },
      kids: {
        type: Sequelize.BOOLEAN
      },
      whyyoushouldmessageme: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      martialstatus: {
        type: Sequelize.STRING
      },
      bodytype: {
        type: Sequelize.STRING
      },
      heightfeet: {
        type: Sequelize.INTEGER
      },
      heightinches: {
        type: Sequelize.INTEGER
      },
      occupation: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Profiles");
  }
};
