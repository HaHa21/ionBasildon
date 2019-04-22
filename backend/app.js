const Sequelize = require("sequelize");

const sequelize = new Sequelize("Basildonapp", "root", "password", {
  dialect: "mysql",
  pool: {
    max: 20,
    idle: 30000
  }
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log("Connection has been established successfully.");
  })
  .catch(function(err) {
    console.log("Unable to connect to the database:", err);
  });
