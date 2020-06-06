'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { BOOLEAN, STRING } = Sequelize
    
    return queryInterface.createTable('Users', {
      cardId: { type: STRING, primaryKey: true },
      name: { type: STRING(30), allowNull: false },
      username: { type: STRING(255), allowNull: false, unique: true },
      password: { type: STRING(255), allowNull: false },
      email: { type: STRING(255), unique: true, allowNull: true },
      isAdmin: { type: BOOLEAN, defaultValue: false, allowNull: true },
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
