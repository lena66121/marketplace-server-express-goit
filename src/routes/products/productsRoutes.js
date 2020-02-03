const fs = require('fs');
const findProductById = require('./productById');
const findProductsByIds = require('./productsByIds');
const findProductsByCategory = require('./category')

const productsRoute = (req, res) => {
    // if (req.method === 'GET' && req.url === '/products') {
    //     const file = fs.readFileSync('./src/db/products/all-products.json');
    //     res.writeHead(200, {
    //         'Content-Type': 'text/json'
    //     });
    //     res.write(file);
    //     res.end(); 

    // } else 
    if (req.method === 'GET' && req.url.includes('category')) {

        findProductsByCategory(req, res);
    
    } else if (req.method === 'GET' && req.url.includes('ids')) {

        findProductsByIds(req, res);

    // } else if (req.method === 'GET' && req.url.lastIndexOf("/") !== 0) {

    //     findProductById(req, res);

    } else {

        res.writeHead(405, {
            "Content-Type": "text/html"
        });
        res.write("<h1>405 Method Not Allowed</h1>");
        res.end();

    }

}

module.exports = productsRoute;