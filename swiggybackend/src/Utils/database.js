const Sequelize = require("sequelize");
const sequelize = new Sequelize("Swiggy", "root", "Arun1234@", {
  dialect: "mysql",
  host: "localhost",
  logging:false
});
module.exports = sequelize;

