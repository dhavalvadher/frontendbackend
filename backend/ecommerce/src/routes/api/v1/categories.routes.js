const express = require('express')
const { categoriescontroller } = require('../../../controller')

const route = express.Router()

route.get(
    '/list_categories',
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


module.exports = route