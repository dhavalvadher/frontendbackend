

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
        console.log("successful");
        // Successful authentication, redirect home.
        res.send("<h1>okkk</h1>");
    });


// routes.get('/facebookLogin',
//     passport.authenticate('facebook', { scope: ['profile', 'email'] }));

// routes.get('/facebook/callback',
//     passport.authenticate('facebook', { failureRedirect: '/login' }),
//     function (req, res) {
//         console.log("facebook succes");
//         res.send("<h1>facebook-okkk</h1>");
//     });


// routes.get('/facebookLogin', 
//     passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));

// routes.get('/facebook/callback',
//     passport.authenticate('facebook', { failureRedirect: '/login' }),
//     (req, res) => {
//         console.log("Facebook login successful");
//         res.send("<h1>Facebook login successful</h1>");
//     });

routes.get('/facebookLogin', 
    passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));

routes.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
        console.log("Facebook login successful");
        res.send("<h1>Facebook login successful</h1>");
    });

module.exports = routes;
