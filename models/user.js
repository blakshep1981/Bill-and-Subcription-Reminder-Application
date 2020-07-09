module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: { type: DataTypes.STRING, validate: { isEmail: true } },
    password: { type: DataTypes.STRING, alowNull: false },
    bills: DataTypes.INTEGER,
    subscription: DataTypes.STRING,
    funds: { type: DataTypes.STRING, allowNull: false },
  });
  return User;
};
