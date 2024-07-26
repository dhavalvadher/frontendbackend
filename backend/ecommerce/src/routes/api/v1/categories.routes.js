const express = require('express')
const { categoriescontroller } = require('../../../controller')
const upload = require('../../../middleware/upload')
const auth = require('../../../middleware/auth')

const route = express.Router()

route.get(
    '/list_categories',
    auth(["dhavall","employee"]),
    categoriescontroller.listcategory
)

route.get(
    '/get_categories/:category_id',
    categoriescontroller.getcategories
)

route.post(
    '/post_categories',
    categoriescontroller.postcategories
)

route.put(
    '/update_categories/:category_id',
    categoriescontroller.updatecategories
)

route.delete(
    '/delete_categories/:category_id',
    categoriescontroller.deletecategories
)

route.get(
    '/count-active',
    categoriescontroller.countactive
)

route.get(
    '/inactive',
    categoriescontroller.inactive
)

route.get(
    '/mostProducts',
    categoriescontroller.mostproducts 
)

route.get(
    '/totalProducts',
    categoriescontroller.totalProducts
)

route.get(
    '/averageproducts',
    categoriescontroller.averageproducts
)

route.get(
    '/specific',
    categoriescontroller.specific
)


module.exports = route 