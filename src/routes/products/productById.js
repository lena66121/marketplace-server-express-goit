const products = require('../../db/products/all-products.json');

const productId = (req, res) => {
     const id = +req.params.id;
     const foundedProduct = products.filter(prod => prod.id === id);

     let responseObj = {
          status: "success",
          products: foundedProduct,
     };

     if (foundedProduct.length !== 0) return res.status(200).json(responseObj);
     else return res.status(200).json({
          status: 'no products',
          products: []
      });
}

module.exports = productId;