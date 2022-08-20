const express=require('express');
var bcrypt = require('bcryptjs');
const cors=require('cors');
const bodyParser=require('body-parser');
const { response } = require('express');
const register=require('./controller/register');
const signIn=require('./controller/signIn');
const image=require('./controller/image');
const profile = require('./controller/profile');

const app=express();
app.use(bodyParser.json());
app.use(cors())
const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
    //   port : 3306,
      user : 'postgres',
      password : 'root',
      database : 'faceRecognition'
    }
  });
  knex.select('*').from('users').then(data=>console.log(data));
/*const database={
   users: [
        {
            id:'123',
            name:'kavya',
            email:'kavya@gmail.com',
            password:'kalu',
            enteries:0,
            joined:new Date()

        },
        {
            id:'456',
            name:'Divya',
            email:'divya@gmail.com',
            password:'bhalu',
            enteries:0,
            joined:new Date()

        }
    ]
}*/

app.get('/',(req,res)=>{
    res.send(database.users)
})
/*app.post('/SignIn',(req,res)=>{
    if(req.body.password===database.users[0].password && req.body.email=== database.users[0].email)
    {
        res.json(database.users[0]);
   }
     else{
        res.status(404).json('invalid user');
     }
})*/
app.post('/SignIn',(req,res)=>{(signIn.handleSignIn(req,res,knex,bcrypt))})
          /////REGISTER NEW USERS////
app.post('/register',(req,res)=>{(register.handleRegister(req,res,knex,bcrypt))})
///***profile****///
app.get('/profile/:id',(req,res)=>{profile.handleProfile(req,res,knex)})
///***images/Enteries****////

app.put('/image',(req,res)=>{image.handleImage(req,res,knex)})



app.listen(3000,()=>{
    console.log("app is running sucss");
})
/*
-->res=this is working
/signIn -->POST =success/fail
/register --> POST= user
/profile/:userId --> GET =user
/image-->PUT -->countor user object
*/