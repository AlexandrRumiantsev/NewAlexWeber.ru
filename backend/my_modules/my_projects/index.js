function projects() {
    const mongoose = require("mongoose");
    
    this.connect = function(res) {
        console.log('connect');
       
        //mongoose.connect('mongodb://' + login + ':' + password + '@' + host + ':' + port + '/' + db, {
        mongoose.connect('mongodb://localhost:27017/server', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function(err, db) {
            if (err) {
                console.log(err);
            } else {
                console.log('Подключение с БД установлено');
                return db;
                /**
                const arr = [
                      {
                        "name": 'Нулевой проект',
                        "id": 0,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "discription": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                        "image": 'https://www.ittoolkit.com/assets/img/articles/600x300/project-definition.jpg'
                      },
                      {
                        "name": 'Первый проект',
                        "id": 1,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "discription": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                        "image": 'https://media.designersfriend.co.uk/sps/media/designs/uploads/work/media/960/img-0018-2-web-67065.jpg'
                      },
                      {
                        "name": 'Второй проект',
                        "id": 2,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "discription": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                        "image": 'https://media.designersfriend.co.uk/sps/media/designs/uploads/work/media/960/img-0018-2-web-67065.jpg'
                      }, 
                      {
                        "name": 'Третий проект',
                        "id": 3,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "discription": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                        "image": 'https://media.designersfriend.co.uk/sps/media/designs/uploads/work/media/960/img-0018-2-web-67065.jpg'
                       },
                       {
                        "name":'Четвертый проект',
                        "id": 4,
                        "title" : "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "discription": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                        "image": 'https://media.designersfriend.co.uk/sps/media/designs/uploads/work/media/960/img-0018-2-web-67065.jpg'
                      },
                    ];
                   **/ 
                   
                  // res.setHeader('Access-Control-Allow-Origin', '*');
        
                    //res.send(arr);
                    //return JSON.stringify(arr);
                   
                                } 
                                
                            });
                        }
  
   this.projects_model = function(res) { 
       var connect;
       if(!connect)  this.connect(res);
       
       const arr = [
                      {
                        "name": 'Нулевой проект',
                        "id": 0,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "discription": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                        "image": 'https://www.ittoolkit.com/assets/img/articles/600x300/project-definition.jpg'
                      },
                      {
                        "name": 'Первый проект',
                        "id": 1,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "discription": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                        "image": 'https://media.designersfriend.co.uk/sps/media/designs/uploads/work/media/960/img-0018-2-web-67065.jpg'
                      },
                      {
                        "name": 'Второй проект',
                        "id": 2,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "discription": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                        "image": 'https://media.designersfriend.co.uk/sps/media/designs/uploads/work/media/960/img-0018-2-web-67065.jpg'
                      }, 
                      {
                        "name": 'Третий проект',
                        "id": 3,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "discription": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                        "image": 'https://media.designersfriend.co.uk/sps/media/designs/uploads/work/media/960/img-0018-2-web-67065.jpg'
                       },
                       {
                        "name":'Четвертый проект',
                        "id": 4,
                        "title" : "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "discription": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                        "image": 'https://media.designersfriend.co.uk/sps/media/designs/uploads/work/media/960/img-0018-2-web-67065.jpg'
                      },
                    ];
                    
       res.setHeader('Access-Control-Allow-Origin', '*');
       res.send(arr);
       
   }           

    
}
module.exports = projects;