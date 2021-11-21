const express = require('express');
const cookieParser = require('cookie-parser');
const countryRouter = require('./routes/country');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const { cacheMiddleware } = require('./middleware/cache-middleware');

const app = express();
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Green House Gases Emmission API",
            description: "Green House Gases Emmission Information",
            contact: {
                name: "Tikaram Mardi"
            },
            servers: [
                {
                    url: 'http://localhost:5000/',
                    description: 'Local server'
                },
                {
                    url: 'https://blueskyan.herokuapp.com/',
                    description: 'Testing server'
                }
            ],
        }
    },
    apis: ['./routes/*.js']
    // apis: ["app.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/', countryRouter, cacheMiddleware(60));
app.use('/country/', countryRouter, cacheMiddleware(60));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.info(`Server running at port:${PORT}`);
});

