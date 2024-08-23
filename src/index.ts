const express = require('express');
 
const mongoose = require('mongoose');
 // const session = require('express-session');
 const axios = require('axios');
// const cors = require('cors');
// const passport = require('passport');
// //const compression = require('compression');
// // const {localPassport} = require('./passport.js');
// //const {googlePassport} = require('./passport.google.js');
// require('./universalPassport.js');
// const compression = require('compression');
// //const passport = require('passport');
const app = express();
// app.use(cors());
// interface User {
//     username:string,
//     pass:string,
//     cart?:[]
// };



// const data:User[] = [{username:'Humdan',pass:'451a'},{username:'Akbar',pass:'abi'},{username:'Shehreyar',pass:'thulo'}];


// app.use(express.json());


// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false,
// }))
// const hashMap = new Map<string,string>();
// hashMap.set('Miami','Miami is best city to live');
// hashMap.set('Hyderabad','Hawaon ka sheher');
// hashMap.set('China','Ni hao');
// hashMap.set('Los Angeles','Fuul Ayashi');
// hashMap.set('Amsterdam','Bachiyan');

// const collection = mongoose.model('students',new mongoose.Schema({},{strict:false}));
// app.use(passport.initialize());
// app.use(passport.session());

// //``app.use(compression());

// app.get('/',async (req:any,res:any)=>{
//     //const response = await axios.get(`http://ip-api.com/json/${req.socket.remoteAddress}`);
//     try{
//     const response = await axios.get(`http://ip-api.com/json/128.1.205.29`);
//     console.log(response.data);
//     const country :string = response.data?.city;
    
//     const fact = hashMap.get(country);
//     if(!fact)
//         return res.status(404).send('<h1>country not found</h1>');    
    
//     console.log(country , fact);

//     return res.send(`<h1>${fact}</h1>`);
// }catch(err){
//     console.log(err)
//     return res.send(`<h1>${err}</h1>`);
// }
// });


// app.get("/getData",async (req:any,res:any)=>{
//         await mongoose.connect('mongodb://127.0.0.1:27017/Company');
//         console.log(await collection.find());
//         return res.send("done")
// });

// app.post('/login',passport.authenticate("local"),(req:any,res:any)=>{
//     console.log("PLEASE ENTER THE USERNAME AND PASSWORD FOR LOGIN");
//     return res.status(200).send('done');
// });




// app.get('/auth',(req:any,res:any)=>{
//     console.log(req.session.passport.user);
//     //console.log(req.session.passport.user?.id);
//     return res.status(200).send(req.user)
// });

// app.get('/logout',(req:any,res:any)=>{
//     req.logout((err:Error)=>{
//         console.log(err)
//        return res.status(200).send(`${req.user} has been log out`);
//     });
// })


// app.get('/auth/google',passport.authenticate('google', { scope: ['profile'] }));

// app.get('/auth/google/callback',passport.authenticate('google', { successRedirect:'/success',failureRedirect: '/loginFailed' }));


//   app.get('/success',(req:any,res:any)=>{
//     console.log(req.user);
//     return res.status(200).send(req.user);
// });


// app.get('/loginFailed',(req:any,res:any)=>{

//     return res.status(404).send('<h1>Login has been failed</h1>');
// });



// app.get('/apiTesting',async (req:any,res:any)=>{
//         try{

//             // const data = await axios.get('https://api.freeapi.app/api/v1/kitchen-sink/response/gzip');
//             // const final = data.data;
//             // console.log(final);
//             const data = 'I am very good boy .May you have a good day '.repeat(100000);
//             return res.status(200).send(data);

//         }catch(err){
//             console.log(err);
//             return res.status(500).send('Internal server error');
//         }
// })

app.get('/',(req:any,res:any)=>{

      const {name,cast} = req.query;
      return res.send(`HELLO ${name} ${cast}`);
});

 app.listen(3000,()=>console.log("Server is up",process.pid));

 export {};

//IPv4: ? 137.59.220.68

//





