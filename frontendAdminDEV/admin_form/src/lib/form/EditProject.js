import React from 'react'
var ReactDOM = require('react-dom');
export const EditProject = function(data){	
   
   return React.createElement(
        "form",
        {
            id: 'edit_form',
            class: "edit-project"
        },
        React.createElement(
        "div",
                {
                    class: "close-project-container"
                },
                React.createElement(
                "div",
                        {
                            class: "close-project",
                            onClick: function(){
                                ReactDOM.unmountComponentAtNode(document.getElementsByClassName('edit-container')[0]);
                                document.getElementsByClassName('edit-container')[0].classList.toggle('active');;
                            }
                        },
                        'X'
                )
        ),

        React.createElement(
        "div",
                {
                    class: "text-container"
                },
                React.createElement(
                "div",
                        {
                            class: "name-project",
                        },
                        React.createElement(
                            'div',
                            {
                              class: "name-project__item",
                            },
                            'name'
                        ),
                        React.createElement(
                            'input',
                            {
                              defaultValue: data.name 
                            }
                        )
                ),
                React.createElement(
                "div",
                        {
                            class: "url-project"
                        },
                        React.createElement(
                            'div',
                            {
                               class: "url-project__item"
                            },
                            'URL'
                        ),
                        React.createElement(
                            'input',
                            {
                              class: "url-project__item",
                              defaultValue: data.link 
                            }
                        )
                ),
                React.createElement(
                "div",
                        {
                            class: "discription-project"
                        },
                        React.createElement(
                            'div',
                            {
                              class: "discription-project__item"
                            },
                            'Описание'
                        ),
                        React.createElement(
                            'textarea',
                            {
                              defaultValue: data.discription
                            }
                        )
                ),
        ),
        React.createElement(
        "div",
                {
                    class: "image-project"
                },
                React.createElement(
                    'div',
                    {
                        class: "image-project__item"
                    },
                    'Превью'
                ),
                React.createElement(
                    'img',
                    {
                      id: data.image,
                      src: 'http://alexweber.ru/img/'+data.image,
                      onClick: ()=>{
                        console.log(
                          document.getElementById('file-target').click()
                        );
                      }
                    }
                ),
                React.createElement("input", {
                    type: "file",
                    id: 'file-target',
                    name: 'file',
                    crossorigin: "anonymous",
                    accept: "image/*",
                    style:{
                      display: "none"
                    },
                    onInput: function onInput(e) {
                      var input = event.target;
                      var reader = new FileReader();
                      reader.onload = function(){
                        var dataURL = reader.result;
                        var output = document.getElementById(data.image);
                        output.src = dataURL;
                      };
                      reader.readAsDataURL(input.files[0]);
                    }
                  })
        ),
        React.createElement(
        "div",
                {
                    class: "image-project-full"
                },
                React.createElement(
                    'div',
                    {
                        class: "image-project-full__item"
                    },
                    'Полное изображение'
                ),
                React.createElement(
                    'img',
                    {
                      id: data.imageFull,
                      src: 'http://alexweber.ru/img/'+data.imageFull,
                      onClick: ()=>{
                        console.log(
                          document.getElementById('file-target-full').click()
                        );
                      }
                    }
                ),
                React.createElement("input", {
                    type: "file",
                    id: 'file-target-full',
                    name: 'file_full',
                    crossorigin: "anonymous",
                    accept: "image/*",
                    style:{
                      display: "none"
                    },
                    onInput: function onInput(e) {
                      var input = event.target;
                      var reader = new FileReader();
                      reader.onload = function(){
                        var dataURL = reader.result;
                        var output = document.getElementById(data.imageFull);
                        output.src = dataURL;
                      };
                      reader.readAsDataURL(input.files[0]);
                    }
                  }),
                React.createElement(
                    'span',
                    {
                      'class': 'sbm-span',
                      onClick: ()=>{
                        let form = document.forms.edit_form;
                        console.log(data._id);
                        console.log(form.querySelector('.image-project img').src);
                        console.log(form.querySelector('.image-project-full img').src);
                        console.log(form.querySelector('.name-project input').value);
                        console.log(form.querySelector('.url-project input').value);
                        console.log(form.querySelector('.discription-project textarea').value);
                      }
                    },
                    ''
                ),
        ),
   )
   

}