const express = require("express");
const app = express();

const qs = require('querystring');
//Обход CORS Блокировки
var cors = require('cors');
app.use(cors());

var http = require('http').Server(app);

const projects = require("./my_modules/my_projects");
const papers = require("./my_modules/my_papers");
const comments = require("./my_modules/comments");
const projectsModel = require("./my_modules/my_projects");

const users = require("./my_modules/users");

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

app.use(bodyParser.json({limit: '1gb'}));
app.use(bodyParser.urlencoded({limit: '1gb', extended: true}));

const fs = require('fs');
const mongoose = require("mongoose");

const multiparty = require('multiparty');
const util = require('util');

const config = require('./my_modules/config.js');
//config.connectDEV();
config.connect();
const base = require("./lib/Base.js");


var tar = require('tar');
var zlib = require('zlib');
var path = require('path');
var mkdirp = require('mkdirp'); // used to create directory tree

 var zip = require("machinepack-zip");




//import { createReadStream, ReadStream } from 'fs';

        
   //app.use(upload.array()); 
        

(function() {
    "use strict";
    
    const multer = require('multer');

        var storage = multer.diskStorage({
          destination: function (req, file, cb) {
            cb(null, 'uploads')
          },
          filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now())
          }
        })
         
   var upload = multer({ storage: storage })

    // Add headers
    app.use(function(req, res, next) {
        console.log(req.rawHeaders[11]);
        //config.accessList().forEach(element => { 
          //if(req.rawHeaders[11] == element)
                next(); 
        //});
        
    });

    // BEGIN Methods for interface API

     app.get('/test', function(req, res) {
        
            const base = require("./lib/Base.js");
            new base( require('./my_modules/comments/Schema.js') , 'getList' , '', '', res );
           
           
     })
    
    app.get('/get_file_data_project', function(req, res) {
        fs.readFile("./files/data/data.json", "utf8", 
                function(error,data){
                    console.log("Асинхронное чтение файла");
                    if(error) throw error; 
                    console.log(data);  
                    res.send(data);
        });
    });
    app.get('/get_file_data_paper', function(req, res) {
        fs.readFile("./files/data_papers/data.json", "utf8", 
                function(error,data){
                    console.log("Асинхронное чтение файла");
                    if(error) throw error; 
                    console.log(data);  
                    res.send(data);
        });
    });
    app.get('/get_file_data_comment', function(req, res) {
        fs.readFile("./files/get_all_comments/data.json", "utf8", 
                function(error,data){
                    console.log("Асинхронное чтение файла");
                    if(error) throw error; 
                    console.log(data);  
                    res.send(data);
        });
    });
    
    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/view/index.html');
    });

    app.get('/exportprod', function(req, res) {
        const resMain = res;
        var http = require('http');
        const mainUrl = 'http://alexweber.ru:5000/';
        const dataGet = [
            'data',
            'data_papers',
            'get_all_comments'
        ];
        const fileSaved = function(dir , data){
            let fs = require('fs');
            let time = new Date("April/17/1983/21:08:00");
 
             //fs.appendFile('./files/'+dir+'/'+time+'.txt', data, function (err) {
             fs.appendFile('./files/'+dir+'/data.json', data, function (err) {
                 if (err) throw err;
                 console.log('Saved!');
                 res.sendFile(__dirname + '/view/success.html');
                 //resMain.download('./files/'+dir+'/'+time+'.txt');
             }); 
         }
         
        const getProd = function(url){
           let parsedData; 
           http.get( mainUrl+url , (res) => {
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                try {
                let str = [];    
                parsedData = JSON.parse(rawData);
                for(let i = 0 ; i<parsedData.length ; i++){
                  str.push(JSON.stringify(parsedData[i]));
                }
                    fileSaved(url , JSON.stringify(str));
                } catch (e) {
                console.error(e.message);
                }
            });
            }).on('error', (e) => {
            console.error(`Got error: ${e.message}`);
            })
           
        }
        for( var i = 0 ; i < dataGet.length; i++){
                getProd(dataGet[i]);
        }
        
        
        
    });

    app.get('/exportDev', function(req, res) {
        res.sendFile(__dirname + '/view/index.html');
    });

    app.get('/importProd', function(req, res) {
        res.sendFile(__dirname + '/view/index.html');
    });

    app.get('/importDev', function(req, res) {
        res.sendFile(__dirname + '/view/index.html');
    });
    

    // END Methods for interface API


    
    // BEGIN Methods for get/take DATA

    app.get('/data', function(req, res) {
        new base( 
            require('./my_modules/Schems/Projects.js') , 
            'getList' , 
            '', 
            '', 
            res 
        );
    });

    app.get('/data_papers', function(req, res) {
        new base( 
            require('./my_modules/Schems/Papers.js') , 
            'getList' , 
            '', 
            '', 
            res 
        );
    });

    app.get('/get_all_comments', function(req, res) {
        console.log('all_comments');
        new base( 
            require('./my_modules/Schems/Comments.js') , 
            'getList' , 
            '', 
            '', 
            res 
        );
    });
    
    app.get('/delete', function(req, res) {

        console.log('delete project');
        var db = new projects();
        var project_data = db.projects_del(res);

    });
    
    app.post('/del_papers', function(req, res) {

        console.log('del_papers');
        console.log(req.body['id']);
        new base( 
            require('./my_modules/Schems/Papers.js') , 
            'delItem' , 
            req.body['id'], 
            '', 
            res 
        );

    });

    app.post('/upp_papers', urlencodedParser , function(req, res) {
        console.log('upp_papers');
        let settter =  {'title': req.body.data.title, 'discription':req.body.data.discription , 'link': req.body.data.link }
        
        new base( 
              require('./my_modules/Schems/Papers.js') , 
              'uppItem' , 
              req.body.data._id , 
              '' ,
              '' ,
              settter
        );
    });
      
    app.post('/save_paper', urlencodedParser , (req, res) => {

        let  form = new multiparty.Form();
        form.parse(req, function(err, fields, files) {
            let nameFile = files.file[0].originalFilename;
            fs.copyFile( 
                files.file[0].path , 
                '../papers/' + nameFile, 
                function(er){
                    if(er){
                        console.log('error: ' + er)
                    }else{
                        console.log('create');
                      
                        zip.unzip({
                            source: '../papers/' + nameFile,
                            destination: '../papers/',
                        }).exec({
                            error: function (err){
                             console.log("error")
                            },
                            success: function (){
                              console.log("success")
                            },
                        });
                      
                    }
                }
            );
          
        });
    
        /*
        Вариант записи файла из строки base64
        let dt = decodeBase64Image(req.body.file);
        fs.writeFile('test.html', dt.data , {encoding: 'base64'}, function(err) {
                 console.log('File created');
        });
        */

    })

    app.post('/save', (req, res) => {
        var POST;
        if (req.method == 'POST') {
            var body = '';
            req.on('data', function(data) {
                body += data;
            });
            req.on('end', function() {
                POST = qs.parse(body);
                //console.log(POST);
                const a = JSON.parse(JSON.stringify(POST));

                Object.keys(a).forEach(function(key) {
                    if (key !== 'undefined') {
                        let data = JSON.parse(key);
                        var db = new projects();
                        var project_data = db.projects_add(res, data);
                        //res.send(project_data);
                    }
                });
            });
        }

    });

    app.post('/comment_add', urlencodedParser, (req, res) => {
        var comment = new comments();
        comment.comments_model(req.body);
    })
    app.post('/comment_del', urlencodedParser, (req, res) => {
        var comment = new comments();
        console.log(req.body);
        comment.comments_del(req.body['id']  , config);
    })
    app.get('/login', function(req, res) {
        console.log('login');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        var db = new users();
        var user_data = db.users_model(res);
    });

    // END Methods for get/take DATA


    http.listen(5000, () => {
        console.log('СЕРВЕР ЗАПУЩЕН');
    });

})();