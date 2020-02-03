const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes/router');

const port = 3000;

const errorHandler = (err, req, res, next) => {
    res
    .status(500)
    .send('Error: ' + err.stack);
}

const startServer = () => {

    app
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())
    .use(morgan('dev'))
    .use('/public', express.static(__dirname + '/public'))
    .use('/', router)
    .use(errorHandler);



    app.listen(port, () => console.log());

}

module.exports = startServer;