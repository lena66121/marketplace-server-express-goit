const fs = require('fs');
const uuid = require('uuid/v1');

const productsList = require('../../db/products/all-products.json');
const ordersList =  require('../../db/users/orders/all-orders.json');
const pathToFile = '../marketplace-server-goit/src/db/users/orders/all-orders.json';

const ordersRoute = (req, res) => {

    req.body.orderId = uuid();

    const userOrder = req.body.products;
    let arrOfProductsId;

    userOrder.map(order => {
        const foundProduct = productsList
        .filter(product => product.categories[0] === order)
        .map(product => product.id);
        arrOfProductsId = foundProduct;
    })

    fs.readFile(pathToFile, 'utf-8', (err, data) => {
        if (err) {
            throw err;
        } else {
            if (arrOfProductsId.length !== 0) {
                ordersList.push(req.body);
                fs.writeFile(pathToFile, JSON.stringify(ordersList), err => {throw err})
            }
        }
    })

    const responseObj = {
        status: "success",
        order: {
            id: req.body.orderId,
            user: req.body.user,
            products: arrOfProductsId,
            deliveryType: "delivery",
            deliveryAddress: req.body.deliveryAddress,
        }
    }

    if (arrOfProductsId.length !== 0) return res.status(200).json(responseObj);
    else return res.status(200).json({
        status: 'failed',
        order: null
    });
}

module.exports = ordersRoute;