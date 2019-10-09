const express = require("express");
const app = express();

const qs = require('querystring');
//Обход CORS Блокировки
var cors = require('cors');
app.use(cors());

var http = require('http').Server(app);

const projects = require("./my_modules/my_projects");
const users = require("./my_modules/users");

//const bodyParser = require('body-parser');

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

(function(){
  "use strict";
  
    // Add headers
    app.use(function (req, res, next) {
    
        // Website you wish to allow to connect
       
    
        // Pass to next layer of middleware
        next();
    });
    
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
 

 app.post('/save', (req, res) => {
        var POST;    
          if(req.method=='POST') {
            var body='';
            req.on('data', function (data) {
                body +=data;
            });
            req.on('end',function(){
                POST =  qs.parse(body);
                //console.log(POST);
                const a = JSON.parse(JSON.stringify(POST));
                
                Object.keys(a).forEach(function(key) {
                 if(key !== 'undefined'){
                    let data = JSON.parse(key);
                    var db = new projects();
                    var project_data = db.projects_add(res , data);
                    //res.send(project_data);
                 }
                });
            });
    }  
        //console.log(POST);
       
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