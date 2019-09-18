const express = require("express");
const app = express();
var http = require('http').Server(app);

const projects = require("./my_modules/my_projects");

(function(){
  "use strict";

 app.get('/', function(req, res){
         
  });
 app.get('/data', function(req, res){
                console.log('data'); 
         var db = new projects();
         var project_data = db.projects_model(res);

  });


http.listen(5000, function(){
                console.log('СЕРВЕР ЗАПУЩЕН');
              });  
})();