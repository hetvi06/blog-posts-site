const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json());
//extra line for to show body parser can also parse url encoded data
// app.use(bodyParser.urlencoded({extended:false}));

// app.use((req,res,next)=>{ //next() will continue its journey and the next app.use/code will be executed
//   console.log('First Middleware');
//   next();
// });

// app.use((req,res)=>{
//   res.send('Hello from express!');
// });

  app.post("/api/posts",(req,res,next)=>{
    const post=req.body;
    console.log(post);
    res.status(201).json({message:'Post Recorded'}); //201 everything is ok and 'resource is created'
  });

app.use('/api/posts',(req,res,next)=>{ //using /api just to denote that this is a REST API. but its optional
  const posts=[
    {
      id:'jasgf587aaf',
      title:'Demo Post',
      content:'demo post from server'
    },
    {
      id:'ajtegfmbskg65',
      title:'Demo Post Num 2',
      content:'2nd demo post from server...yayy'
    }
  ];
  // res.json(posts); simply send posts
  // send complex response and also a successful status code 200
  res.status(200).json({
    message:'Retrival Successful',
    posts:posts
  });
});


//to bind this express app to the node server so as to use and execute all these functionalities
//in nodejs server we export this as a module and import in server.js
module.exports=app;
