// const express = require('express');
// const { usersController } = require('../../../controller');


// const routes = express.Router();

// routes.post(
//     '/register',
//     usersController.ragister
// )

// routes.post(
//     '/login',
//     usersController.login
// )

// routes.post(
//     '/newtokens',
//     usersController.generateNewTokens
// )


// module.exports = routes;


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


module.exports = routes;
