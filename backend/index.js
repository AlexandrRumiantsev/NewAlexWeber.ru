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

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


const mongoose = require("mongoose");


var config = require('./my_modules/config.js');
//config.connectDEV();
config.connect();
(function() {
    "use strict";

    // Add headers
    app.use(function(req, res, next) {
        next();
    });

    // BEGIN Methods for interface API

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
 
             fs.appendFile('./files/'+dir+'/'+time+'.txt', data, function (err) {
                 if (err) throw err;
                 console.log('Saved!');
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
        
        res.sendFile(__dirname + '/view/success.html');
        
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

        var projects = new projectsModel();
        var project_result = projects.projects_model(res, (data) => {
            res.send(data);
        });

    });

    app.get('/data_papers', function(req, res) {
        console.log('data_papers');
        var db_papers = new papers();
        var papers_data = db_papers.papers_model(res);
    });

    app.get('/get_all_comments', function(req, res) {
        console.log('all_comments');
        var db_comments = new comments();
        db_comments.get_all_comments(res);
    });

    app.get('/delete', function(req, res) {

        console.log('delete project');
        var db = new projects();
        var project_data = db.projects_del(res);

    });

    app.post('/upp_papers', urlencodedParser , function(req, res) {
        //console.log(req.body.data);
        console.log('upp_papers');
        var db_papers = new papers();
        var papers_data = db_papers.upp_papers( res , req.body.data);
    });


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