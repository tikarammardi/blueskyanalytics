const { sequelizeInstance, Sequelize } = require('../config/db')
const GreenHouseGases = sequelizeInstance.define(
    'GreenHouseGases',
    {
        id: {
            type: Sequelize.INTEGER(11),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        country: {
            type: Sequelize.STRING,
        },
        year: {
            type: Sequelize.STRING,
        },
        value: {
            type: Sequelize.STRING,
        },
        category: {
            type: Sequelize.STRING,
        },
    },
    {
        timestamps: false,
        underscored: true,
        tableName: 'green_house_gas_emissions',
        freezeTableName: true
    }
);

module.exports = GreenHouseGases;

