const googlePassport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

googlePassport.use(new GoogleStrategy({
    clientID: '',
    clientSecret: '',
    callbackURL: "http://localhost:3000/auth/google/callback"
  },

  function(accessToken:any, refreshToken:any, profile:any, done:any) {
    console.log(profile);    
    done(null,profile);
  }

));


googlePassport.serializeUser((user:any,done:any)=>{
    done(null,user);
});

googlePassport.deserializeUser((user:any,done:any)=>{
    done(null,user);
})

export {}
