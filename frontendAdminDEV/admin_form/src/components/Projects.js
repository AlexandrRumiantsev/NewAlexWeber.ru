import React, {
  Component
} from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';

import '../styles/body/projects/list.scss';
import '../styles/body/projects/item.scss';

var ReactDOM = require('react-dom');

import * as myModule from '../lib/';

//https://stackoverflow.com/questions/58200373/how-to-append-child-to-react-element

function editProject(data , store , target){
  let to = document.getElementsByClassName('edit-container')[0];
  console.log(to);
  to.classList.toggle('active');
  
  ReactDOM.render(
    myModule.liba.form.create('EditProject',data) , 
    to
   )
}

function ListProject(props) {
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
        'store':store,
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
      <div class='edit-container'></div>
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