"use strict";
const universalPassport = require('passport');
const { Strategy } = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
;
const data = [{ username: 'Humdan', password: '451a', id: 6 }, { username: 'Akbar', password: 'abi', id: 33 }, { username: 'Shehreyar', password: 'thulo', id: 69 }];
universalPassport.use(new Strategy((username, password, done) => {
    const user = data.find(user => user.username === username && user.password === password);
    try {
        if (!user)
            throw new Error("User not found");
        done(null, user.id);
    }
    catch (err) {
        done(err, null);
    }
}));
universalPassport.serializeUser((user, done) => {
    done(null, user);
});
universalPassport.deserializeUser((user, done) => {
    const myUser = data.find(client => client.id === user);
    done(null, myUser);
});
universalPassport.use(new GoogleStrategy({
    clientID: '22182420256-bcvlntc1s77g9ohul3p3ef4sghk51bms.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/auth/google/callback"
}, function (accessToken, refreshToken, profile, done) {
    //console.log(profile);    
    done(null, profile);
}));
universalPassport.serializeUser((user, done) => {
    done(null, user);
});
universalPassport.deserializeUser((user, done) => {
    done(null, user);
});
module.exports = {
    universalPassport
};
