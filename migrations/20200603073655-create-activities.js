'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    const { STRING } = Sequelize

    return queryInterface.createTable('Activities', {
      cardId: {
        allowNull: false,
        primaryKey: true,
        type: STRING(30).BINARY,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'cardId'
        }
      },
      unclock_date: {
        allowNull: false,
        primaryKey: true,
        type: STRING(30).BINARY,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Activities');
  }
};