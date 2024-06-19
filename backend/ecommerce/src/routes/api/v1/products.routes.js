const express = require('express');
const { productsController } = require('../../../controller');
const upload = require('../../../middleware/upload');
// const router = express.Router();


const route = express.Router();

route.get(
    "/list-products",
    productsController.listProducts
);

route.get("/get-product/:product_id", 
    productsController.getProduct
);

route.post(
    "/create-product",
    upload.single("product_image"),
    productsController.addProducts
);

route.put(
    "/update-product/:product_id",
    upload.single("product_image"),
    productsController.updateProducts
);

route.delete(
    "/delete-product/:product_id",
    productsController.deleteProducts
);

module.exports = route;