module.exports = (sequelize, DataTypes) => {
  const { STRING, BOOLEAN } = DataTypes

  const User = sequelize.define('Users', {
    ccardId: { type: STRING, primaryKey: true },
    name: { type: STRING(30), allowNull: false },
    username: { type: STRING(255), allowNull: false, unique: true },
    password: { type: STRING(255), allowNull: false },
    email: { type: STRING(255), unique: true, allowNull: true },
    isAdmin: { type: BOOLEAN, defaultValue: false, allowNull: true },
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return User;
};