const { Sequelize } = require('sequelize');
let sequelizeInstance = new Sequelize({
    dialect: 'sqlite',
    storage: './config/bluesky.sqlite'
});

module.exports.sequelizeInstance = sequelizeInstance;
module.exports.Sequelize = Sequelize;