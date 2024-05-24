"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const localPassport = require('passport');
const { Strategy } = require('passport-local');
;
const data = [{ username: 'Humdan', password: '451a', id: 6 }, { username: 'Akbar', password: 'abi', id: 33 }, { username: 'Shehreyar', password: 'thulo', id: 69 }];
localPassport.use(new Strategy((username, password, done) => {
    console.log(username, password);
    const user = data.find(user => user.username === username && user.password === password);
    try {
        if (!user)
            throw new Error("User not found");
        done(null, user);
    }
    catch (err) {
        done(err, null);
    }
}));
localPassport.serializeUser((user, done) => {
    done(null, user.id);
});
localPassport.deserializeUser((id, done) => {
    const user = data.find(user => user.id === id);
    if (user)
        done(null, user);
});
