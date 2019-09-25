const express = require("express");
const app = express();
var http = require('http').Server(app);

const projects = require("./my_modules/my_projects");
const users = require("./my_modules/users");

(function(){
  "use strict";

 app.get('/', function(req, res){
         
  });
  
 app.get('/data', function(req, res){
     
   // console.log('data'); 
    var db = new projects();
    var project_data = db.projects_model(res);
    
 });
 
 app.get('/delete', function(req, res){
     
    console.log('delete project'); 
    var db = new projects();
    var project_data = db.projects_del(res);
    
 });



app.get('/login', function(req, res){
     
    console.log('login'); 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods" , "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
       
    var db = new users();
    var user_data = db.users_model(res);
 
 });    



http.listen(5000, ()=>{
                console.log('СЕРВЕР ЗАПУЩЕН');
                var db = new projects();
                db.connect();
              });  
})();