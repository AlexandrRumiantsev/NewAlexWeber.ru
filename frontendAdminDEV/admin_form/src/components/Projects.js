import React, {
  Component
} from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';

import '../styles/body/projects/list.scss';
import '../styles/body/projects/item.scss';

var ReactDOM = require('react-dom');

function editProject(data , store , target){
  let to = target.parentElement.parentElement.parentElement.getElementsByClassName('edit-container')[0];
  to.style = 'display:block;'
  ReactDOM.render(
      React.createElement(
        "div",
        {
            id: "add-page"
        },
        React.createElement(
            "div",
            {
                className: "add-container"
            },
            React.createElement("h1", null, "Редактировать проект"),
            
            React.createElement(
              "form",
              {
                  className: "colm-container",
                  id: "add_form",
                  encType: "multipart/form-data"
              },

            React.createElement(
              "div",
              {
                  className: "colm-right"
              },
              React.createElement("span", null, "Наименование товара"),
              React.createElement("span", null, "Изображение"),
              React.createElement("span", null, "Описание"),
              React.createElement("span", null, ""),
            ),

            React.createElement(
              "div",
              {
                  className: "colm-left"
              },
                React.createElement(
                "div",
                {
                    className: "colm-content"
                },
                  React.createElement("input", {
                    type: "text",
                    value: "text",
                    onInput: function onInput(e) {
                        alert(e.target.value);
                    }
                  }),
                ), 
                
                React.createElement(
                  "div",
                  {
                      className: "colm-content"
                  },
                  React.createElement("input", {
                    type: "file",
                    id: 'file-target',
                    name: 'file',
                    crossorigin: "anonymous",
                    accept: "image/*",
                    onInput: function onInput(e) {
                      var input = event.target;
                      var reader = new FileReader();
                      reader.onload = function(){
                        var dataURL = reader.result;
                        var output = document.querySelector('#img');
                        output.src = dataURL;
                      };
                      reader.readAsDataURL(input.files[0]);
                    }
                  }),
                  React.createElement("div", {
                    className: "file-in",
                    id: 'file-in',
                    onClick: function (e) {
                      console.log(e.target);
                      document.getElementById('file-target').click();
                    },
                    
                  },
                  React.createElement("img", {
                    id: 'img'
                  })
                  ),
                ),
                
                React.createElement(
                  "div",
                  {
                      className: "colm-content"
                  },
                  React.createElement("textarea", {
                    value: "text",
                    name: "discription",
                    onInput: function onInput(e) {
                        alert(e.target.value);
                    }
                  }),
                ),
                
                React.createElement(
                  "div",
                  {
                      className: "colm-content"
                  },
                  React.createElement("input", {
                    type: "submit",
                    value: "Добавить",
                    onClick: function onInput(e) {
                      e.preventDefault();
                      console.log(e.target.value);
                      console.log(self(
                        document.forms.add_form
                      ));
                    }
                  }),
                )
              ),
            ) 
        ),
        React.createElement(
            "div",
            {
                className: "close",
                onClick: function (e) {
                  to.style = 'display:none'
                }
            },
            'Закрыть'
        ),
      ),
  to
  ); 
}

function ListProject(props) {
    console.log(props.data);
    return <div className='item'>
              <div className='item__title'>
                  <div className='title__content'>
                    {props.data.name}
                  </div>
              </div>
              <div className='container-btn'>
                <a target='_blank' href={props.data.link}>
                  <i class="fal fa-tv"></i>
                </a>  
                <span onClick={(e)=>{
                  editProject(props.data , props.store ,e.target );
                }}>
                  <i class="fas fa-edit"></i>
                </span>
                <span onClick={()=>{
                  let del = confirm("Удалить?");
                  if(del){
                    console.log(props.store);
                  }
                }}>
                  <i class="fas fa-trash-alt"></i>
                </span>
              </div>
              <div class='edit-container'></div>
            </div>
}

export default class Projects extends Component {
  constructor() {
    super(...arguments);
    this.setState({
      data: [],
      render: false
    })
    const {
      store
    } = this.props
    this.state = store.getState();
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });

  }
  componentDidMount() {
    const {
      store
    } = this.props

    store.dispatch({
      type: 'getProjectsAll',
      data: {
        'projectComponent' : this
      }
    })
  }
  render() {

    const {
      store
    } = this.props
    

    if(this.state.render == true){
      
      return <div class='list-projects'>
      <div onClick={()=>{
              this.setState({
                state: false
              })

              store.dispatch(
                  {
                    type: 'index', 
                    val: 'index'
                  }
              )
          }}
          className='item__close'>
        X
      </div>
      {this.state.data.map((project, index)=> {
        console.log(project.imageFull);
            const pStyle = {
              background: "url('http://alexweber.ru/img/"+project.image+"')",
              backgroundSize: 'cover' 
            };

            return <div style={pStyle} class='projects__item' 
                        key={index}>
                      <ListProject store={store} data={project}/>
                    </div>
       })}
      </div>
    }else{
      return <div class='loader'></div>
    }
    
  }
}