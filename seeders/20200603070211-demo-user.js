'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: "Nguyen Thanh",
      username: "admin",
      password: "admin",
      cardId: "12345",
      isAdmin: true,
      email: "admin@gmail.com",
    }, {
      name: "Hoang Tuan",
      username: "admin1",
      password: "admin1",
      cardId: "123453",
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
