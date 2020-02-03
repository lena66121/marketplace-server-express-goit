const products = require('../../db/products/all-products.json');

const productsCategory = (req, res) => {
    const foundCategory = req.query.category;
    const lastIndex = foundCategory.lastIndexOf('"');
    const firstIndex = foundCategory.indexOf('"');
    const category = foundCategory.slice(firstIndex + 1, lastIndex);

    const arrOfProducts = products.filter(prod => prod.categories[0] === category);

    let responseObj = {
        status: "success",
        products: arrOfProducts,
    };

    if (arrOfProducts.length !== 0) return res.status(200).json(responseObj);
    else return res.status(200).json({
        status: "no products",
        products: []
    });
}

module.exports = productsCategory;