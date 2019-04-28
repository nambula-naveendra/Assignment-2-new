const express = require("express");
const bodyParser =require("body-parser");
const fs = require('fs');
const app = express();


app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,respond){
  respond.sendFile(__dirname+"/mail.html");
});
//app.get("/",function(request,respond){
//respond.sendFile(__dirname+"/mail.html");
//});

app.post("/",function(request,respond){


   var From = request.body.m1;
   var To = request.body.m2;
   var sub = request.body.m3;
   var mailBody = request.body.m4;

  fs.appendFileSync('mail.txt', "\n"+"From Email :"+From+". "+"To Email :"+To+". "+"Subject :"+sub+". "+"Body :"+mailBody+". " );
  respond.send("Mail sent");
  console.log('Please open Mail.txt');

});

app.listen(3001);
