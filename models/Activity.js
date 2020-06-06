module.exports = (sequelize, DataTypes) => {
  const { STRING } = DataTypes

  const Activity = sequelize.define('Activities', {
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
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return Activity;
};