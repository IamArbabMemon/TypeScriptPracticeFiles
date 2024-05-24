"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googlePassport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
googlePassport.use(new GoogleStrategy({
    clientID: '22182420256-bcvlntc1s77g9ohul3p3ef4sghk51bms.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/auth/google/callback"
}, function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    done(null, profile);
}));
googlePassport.serializeUser((user, done) => {
    done(null, user);
});
googlePassport.deserializeUser((user, done) => {
    done(null, user);
});
