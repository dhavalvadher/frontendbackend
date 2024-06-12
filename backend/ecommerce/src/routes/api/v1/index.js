const express = require("express")

const route = express.Router()

const categoryRouter = require("./categories.routes")
const subcategoryRouter = require("./subcategories.routes")
const productsRouter = require("./products.routes")

route.use("/categories", categoryRouter)
route.use("/subcategories", subcategoryRouter)
route.use("/products", productsRouter)


module.exports = route