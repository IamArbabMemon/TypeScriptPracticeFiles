
const universalPassport = require('passport');
const {Strategy} = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


interface User {
    username:string,
    password:string,
    id:number
    cart?:[]
};


const data:User[] = [{username:'Humdan',password:'451a',id:6},{username:'Akbar',password:'abi',id:33},{username:'Shehreyar',password:'thulo',id:69}];


universalPassport.use(new Strategy((username:string,password:string,done:any)=>{
    

    const user = data.find(user => user.username ===username && user.password ===password);

    try{

        if(!user)
              throw new Error("User not found");
         
        done(null,user.id);   

    }catch(err){
        done(err,null)    
    }

})

);

universalPassport.serializeUser((user:any,done:any)=>{
    done(null,user);
})

universalPassport.deserializeUser((user:any,done:any)=>{
    const myUser = data.find(client => client.id===user);
  
      done(null,myUser);    
})


universalPassport.use(new GoogleStrategy({
    clientID: '',
    clientSecret: '',
    callbackURL: "http://localhost:3000/auth/google/callback"
  },

  function(accessToken:any, refreshToken:any, profile:any, done:any) {
    //console.log(profile);    
    done(null,profile);
  }

));


universalPassport.serializeUser((user:any,done:any)=>{
    done(null,user);
});

universalPassport.deserializeUser((user:any,done:any)=>{
    done(null,user);
})




module.exports = {
    universalPassport
}
