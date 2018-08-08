const express=require('express');

const app=express();

app.use((req,res,next)=>{ //next() will continue its journey and the next app.use/code will be executed
  console.log('First Middleware');
  next();
});

app.use((req,res)=>{
  res.send('Hello from express!');
});


//to bind this express app to the node server so as to use and execute all these functionalities
//in nodejs server we export this as a module and import in server.js
module.exports=app;
