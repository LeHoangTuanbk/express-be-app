'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Activities', [{
      cardId: '12345',
      unclock_date: new Date().toISOString(),
    }, {
      cardId: 12345,
      unclock_date: new Date(2020, 6, 11).toISOString(),
    }, {
      cardId: 123453,
      unclock_date: new Date().toISOString(),
    }])
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
