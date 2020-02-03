const fs = require('fs');
const productsList = require('../../db/products/all-products.json')

const productsRoute = (req, res) => {
    res
        .status(200)
        .json(productsList);
}

module.exports = productsRoute;