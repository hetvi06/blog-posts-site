const http=require('http');
const app=require('./nodeBackend/app');

const port=process.env.PORT || 3000;

app.set('port',port); // this tells express on what port we are working.
const server=http.createServer(app);

//this is used for the server to actually listen to requests.
server.listen(port); //this will make sure that the server is either running on a designated port provided by the web server provider or port 3000 if nothing is provided
