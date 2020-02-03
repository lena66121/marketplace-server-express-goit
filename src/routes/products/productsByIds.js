const products = require('../../db/products/all-products.json');

const productIds = (req, res) => {

    const arrOfIds = req.query.ids.split(',');

    let arrOfProducts = [];

    arrOfIds.map(id => {
        const product = products.find(prod => prod.id === +id);
        if (product) arrOfProducts.push(product);
    })

    let responseObj = {
        status: "success",
        products: arrOfProducts,
    }

    if (arrOfProducts.length !== 0) return res.status(200).json(responseObj);
    else return res.status(200).json({
        status: 'no products',
        products: []
    });
}

module.exports = productIds;