module.exports = (sequelize, DataTypes) => {
  const { STRING } = DataTypes

  const Activity = sequelize.define('Activity', {
    cardId: {
      allowNull: false,
      primaryKey: true,
      type: STRING,
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
      type: STRING,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: true,
      default: 'RFID'
    }
  }, {
    tableName: 'Activities',
    timestamps: false,
  });

  return Activity;
};