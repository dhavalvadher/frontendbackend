

const express = require("express");
const { usersController } = require("../../../model/index");
const passport = require("passport");

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


routes.get(
    '/googleLogin',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

routes.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        console.log("succes");
        // Successful authentication, redirect home.
        res.send("<h1>okkk</h1>");
    });


module.exports = routes;
