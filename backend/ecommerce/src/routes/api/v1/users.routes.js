

const express = require("express");
const {usersController} = require("../../../model/index")

const routes = express.Router();

routes.post(
    "/useradd",
    usersController.userpost

)

routes.post(
    "/login",
    usersController.login

)

routes.post(
    "/get-newtoken",
    usersController.getnewtoken

)

routes.post(
    "/logout",
    usersController.logout

)


module.exports = routes;
