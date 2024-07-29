const passport = require('passport');
const Users = require('../model/users.model');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const FacebookStrategy = require('passport-facebook').Strategy;


const googleProvider = async () => {
    try {
        await passport.use(new GoogleStrategy({
            clientID: "809862158173-upakmu2p7gj0i4vpnc91imk65nf4e605.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:9000/api/v1/users/google/callback"
        },

            async function (accessToken, refreshToken, profile, cb) {
                console.log(profile);
                try {
                     let user = await Users.findOne({ googleId: profile.id })
                    if (!user) {
                        user = await Users.create({
                            name: profile.displayName,
                            email: profile.emails[0].value,
                            googleId: profile.id,
                            role: "user",
                        })
                    }
                    return cb(null, user);
                } catch (error) {
                    return cb(error, null);
                }

            }
        ));

        passport.serializeUser(function (user, done) {
            done(null, user.id);
        });

        passport.deserializeUser(async function (id, done) {
            await Users.findById(id, function (err, user) {
                done(err, user);
            });
        });

    } catch (error) {
        console.log(error);
    }
}



const facebookProvider = () => {
    passport.use(new FacebookStrategy({
        clientID: "838301617918888",
        clientSecret: "a01a4c9ceae232a10870cea501861036",
        callbackURL: "http://localhost:9000/api/v1/users/facebook/callback",
        profileFields: ['id', 'displayName', 'emails']
    },
    async (accessToken, refreshToken, profile, cb) => {
        console.log(profile);
        try {
            const email = profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null;
            console.log(email);

            let user = await Users.findOne({ facebookId: profile.id });
            if (!user) {
                user = await Users.create({
                    name: profile.displayName,
                    email: email,
                    facebookId: profile.id,
                    role: "user"
                });
            }
            return cb(null, user);
        } catch (error) {
            console.error('Error in Facebook strategy', error);
            return cb(error, null);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await Users.findById(id);
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    });
};

module.exports = {
    googleProvider,
    facebookProvider
}


