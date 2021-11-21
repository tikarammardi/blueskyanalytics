const express = require('express');
const router = express.Router();
const GreenHouseGases = require('../models/GreenHouseGases');
const { sequelizeInstance } = require('../config/db')
const { Op } = require('sequelize');


// Routes
/**
 * @swagger
 * /countries:
 *  get:
 *    description: Use to request all countries
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: A failure response
 *      '404':
 *        description: A failure response no data found
 */
router.get('/countries', async (req, res, next) => {

    try {

        const responsePayload = await GreenHouseGases.findAll({
            attributes: ['id', 'country', 'value', 'year'],
            group: ['year', 'country'],
            order: [
                [sequelizeInstance.col("year"), "DESC"],
            ],
            plain: false,
            raw: true
        })


        if (!responsePayload.length) {
            return res.status(404).json({
                status: 'failure',
                reason: 'No data found'
            });
        }


        return res.status(200).json(responsePayload);
    } catch (error) {
        return res.status(400).json({
            status: 'failure',
            reason: error.message
        });
    }
});
// Routes
/**
 * @swagger
 * /country/id?startYear=2012&endYear=2014&parameters=co2:
 *  get:
 *    description: Use to request all countries
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: A failure response
 *      '404':
 *        description: A failure response no data found
 */
router.get('/id', async (req, res, next) => {

    try {
        console.log(req.query)
        // Access the provided 'page' and 'limt' query parameters
        const { startYear, endYear, parameters } = req.query;
        const validParameters = ['CO2', 'GHG', 'HFCS', 'CH4', 'NF3', 'N2O', 'PFCS', 'SF6']

        let where;

        if (!Object.keys(req.query).length) {
            throw new Error('Query string missing');
        }



        if ((!parameters) && endYear && startYear) {
            where = {
                year: {
                    [Op.between]: [startYear, endYear]
                }
            }
        } else if (parameters !== '' && endYear && startYear) {

            gases = parameters.toUpperCase().split(',');
            gases.forEach(gas => {
                let isValid = validParameters.includes(gas);
                if (!isValid) {
                    throw new Error(`Paramater ${gas} not allowed`)
                }
            });

            where = {
                [Op.or]: [{ category: gases }],
                year: {
                    [Op.between]: [startYear, endYear]
                }
            }
        } else {
            throw new Error('Query string missing');
        }




        const responsePayload = await GreenHouseGases.findAll({
            attributes: ['id', 'country', 'value', 'year', 'category'],
            where,
            plain: false,
            raw: true
        })
        //console.log('response payload', responsePayload);
        if (!responsePayload.length) {
            return res.status(404).json({
                status: 'failure',
                reason: 'No data found'
            });
        }


        return res.status(200).json(responsePayload);
    } catch (error) {
        return res.status(400).json({
            status: 'failure',
            reason: error.message
        });
    }
});




module.exports = router;