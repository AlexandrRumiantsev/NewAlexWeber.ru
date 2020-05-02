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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({
    extended: true
}));

const mongoose = require("mongoose");



this.connect = function(res) {
    console.log('connect');

    mongoose.connect('mongodb://localhost:27017/server', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function(err, db) {
        if (err) {
            console.log(err);
        } else {
            console.log('111Подключение с БД установлено');
            return db;

        }

    });
}();



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
    app.get('/dev', function(req, res) {
        mongoose.connect('mongodb://mongo:27017/docker-node-mongo', {
                useNewUrlParser: true
            })
            .then(() => console.log('Соединение с MongoDB установленно'))
            .catch(err => console.log('ERROR:' + err));

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