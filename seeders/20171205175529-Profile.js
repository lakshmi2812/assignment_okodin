"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var profiles = [];
    for (let i = 0; i < 10; i++) {
      profiles.push({
        userId: i + 1,
        pets: `dogsnamed${i}`,
        education: `somestring${i}`,
        age: i,
        city: "somecity",
        distance: i,
        talents: `somestring${i}`,
        favorites: `somestring${i}`,
        kids: true,
        whyyoushouldmessageme: `somestring${i}`,
        gender: `female`,
        martialstatus: `somestring${i}`,
        bodytype: `somestring${i}`,
        heightfeet: i,
        heightinches: i,
        occupation: `somestring${i}`
      });
    }
    return queryInterface.bulkInsert("Profiles", profiles);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
