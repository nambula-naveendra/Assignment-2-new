const express = require("express");
const bodyParser =require("body-parser");
const fs = require('fs');
const app = express();


app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,respond){
  respond.sendFile(__dirname+"/user.html");
});
//app.get("/",function(request,respond){
//respond.sendFile(__dirname+"/mail.html");
//});

app.post("/",function(request,respond){

    var Name = request.body.n1;
    var Email = request.body.n2;
    var Phone = request.body.n3;
  fs.appendFileSync('user.txt', "\n"+"Name :"+Name+". "+"Email :"+Email+". "+"Phone :"+Phone+". " );
  respond.send("User Created");
  console.log('Please open donor.txt');


});

app.listen(3000);
