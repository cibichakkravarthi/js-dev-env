
//EXPRESS CONFIGURATION

//eslint-disable no-console

var express = require("express"); // get express

var path = require("path"); // for path

var open = require("open") // open the website in the browser

var app = express();

var port = "3000";//es6 code- const port = "3000";

import webpack from 'webpack';
import config from '../webpack.config.dev';

const compiler = webpack(config);

//tel express to use webpack-dev-middleware with compiler and properties as arguments
app.use(require('webpack-dev-middleware')(compiler,{
noInfo:true,
publicPath:config.output.publicPath



}));



//handle any request beginning with /
app.get('/', function(req,res){

console.log("DIR NAMddR"+__dirname);

  res.sendFile(path.join(__dirname,"../src/index.html"));


});

//Configure the server to listen to port 3000

app.listen(port, function(error){
if(error) {

  console.log(error);
}else {

  open("http://localhost:3000");
}
});



