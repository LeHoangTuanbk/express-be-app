module.exports = (sequelize, DataTypes) => {
  const { INTEGER, STRING, BOOLEAN } = DataTypes

  const Person = sequelize.define('Person', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING(30), allowNull: false },
    username: { type: STRING(255), allowNull: false },
    password: { type: STRING(255), allowNull: false },
    idCard: { type: STRING(255), allowNull: false },
    isAdmin: { type: BOOLEAN, defaultValue: false, allowNull: false },
    role: { type: STRING(30), defaultValue: 'member', allowNull: false },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
  return Person;
};