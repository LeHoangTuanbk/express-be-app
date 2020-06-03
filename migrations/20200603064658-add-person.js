'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize
    
    return queryInterface.createTable('Person', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: STRING(30), allowNull: false },
      username: { type: STRING(255), allowNull: false },
      password: { type: STRING(255), allowNull: false },
      idCard: { type: STRING(255), allowNull: false },
      isAdmin: { type: Sequelize.BOOLEAN, defaultValue: false, allowNull: false },
      role: { type: STRING(30), defaultValue: 'member', allowNull: false },
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
