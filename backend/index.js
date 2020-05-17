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

app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));

const fs = require('fs');
const mongoose = require("mongoose");


const config = require('./my_modules/config.js');
//config.connectDEV();
config.connect();
const base = require("./lib/Base.js");



        
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
        next();
    });

    // BEGIN Methods for interface API

     app.get('/test', function(req, res) {
        
            const base = require("./lib/Base.js");
            new base( require('./my_modules/comments/Schema.js') , 'getList' , '', '', res );
           
           
     })
    

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
        new base( 
            require('./my_modules/my_projects/Schema.js') , 
            'getList' , 
            '', 
            '', 
            res 
        );
    });

    app.get('/data_papers', function(req, res) {
        new base( 
            require('./my_modules/my_papers/Schema.js') , 
            'getList' , 
            '', 
            '', 
            res 
        );
    });

    app.get('/get_all_comments', function(req, res) {
        console.log('all_comments');
        new base( 
            require('./my_modules/comments/Schema.js') , 
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
            require('./my_modules/my_papers/Schema.js') , 
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
              require('./my_modules/my_papers/Schema.js') , 
              'uppItem' , 
              req.body.data._id , 
              '' ,
              '' ,
              settter
        );
    });
    
    app.post('/save_paper', urlencodedParser , (req, res) => {
        console.log(req.body.file);
        
        function decodeBase64Image(dataString) {
          var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
            response = {};
        
          if (matches.length !== 3) {
            return new Error('Invalid input string');
          }
        
          response.type = matches[1];
          response.data = new Buffer(matches[2], 'base64');
        
          return response;
        }
        let dt = decodeBase64Image(req.body.file);
        console.log(dt);
        fs.writeFile('image.jpg', dt.data , {encoding: 'base64'}, function(err) {
                 console.log('File created');
        });
        
       
        
    
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