'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Person', [{
      name: "Nguyen Thanh",
      username: "admin",
      password: "admin",
      idCard: "12345",
      isAdmin: true,
      role: "admin",
    }, {
      name: "Hoang Tuan",
      username: "admin1",
      password: "admin1",
      idCard: "123453",
      isAdmin: false,
      role: "member"
    }])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
