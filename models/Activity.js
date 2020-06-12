module.exports = (sequelize, DataTypes) => {
  const { STRING } = DataTypes

  const Activity = sequelize.define('Activities', {
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
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return Activity;
};