const {Sequelize} = require('sequelize');

const sequelize = new Sequelize("pw26","root","", {
    host:"localhost",
    dialect:'mysql'
});

module.exports = {
    sequelize,
}