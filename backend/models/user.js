const Sequelize = require("sequelize");

module.exports = sequelize.define(
  "registration",
  {
    userId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: { type: Sequelize.STRING(45), allowNull: false },
    password: { type: Sequelize.STRING(255), allowNull: false },
    firstname: { type: Sequelize.STRING(45), allowNull: false },
    lastname: { type: Sequelize.STRING(45), allowNull: false },
    address: { type: Sequelize.STRING(100), allowNull: false },
    email: { type: Sequelize.STRING(100), allowNull: false },
    postcode: { type: Sequelize.STRING(20), allowNull: false },
    DOB: { type: Sequelize.DATE, allowNull: false },
    gender: { type: Sequelize.ENUM("M", "F"), allowNull: false },
    role: { type: Sequelize.STRING(30), allowNull: false }
  },
  {
    freezeTableName: true,
    instanceMethods: {
      generateHash(password) {
        return bcrypt.hash(password, bcrypt.genSaltSync(8));
      },
      validPassword(password) {
        return bcrypt.compare(password, this.password);
      }
    }
  }
);
