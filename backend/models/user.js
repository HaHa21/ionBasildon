const Sequelize = require("sequelize");
const crypto = require("crypto");

module.exports = sequelize.define(
  "registration",
  {
    userId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: { type: Sequelize.STRING(45), allowNull: false },
    password: {
      type: Sequelize.STRING(255),
      get() {
        return () => this.getDataValue("password");
      },
      allowNull: false
    },
    salt: {
      type: Sequelize.STRING,
      get() {
        return () => this.getDataValue("salt");
      }
    },
    firstname: { type: Sequelize.STRING(45), allowNull: false },
    lastname: { type: Sequelize.STRING(45), allowNull: false },
    address: { type: Sequelize.STRING(100), allowNull: false },
    email: { type: Sequelize.STRING(100), allowNull: false },
    postcode: { type: Sequelize.STRING(20), allowNull: false },
    DOB: { type: Sequelize.DATE, allowNull: false },
    gender: { type: Sequelize.ENUM("Male", "Female"), allowNull: false },
    role: { type: Sequelize.ENUM("Admin", "User"), allowNull: false }
  },
  {
    freezeTableName: true,
    instanceMethods: {
      generateSalt() {
        return crypto.randomBytes(16).toString("base64");
      },
      encryptPassword(plainText, salt) {
        return crypto
          .createHash("RSA-SHA256")
          .update(plainText)
          .update(salt)
          .digest("hex");
      }
    }
  }
);
