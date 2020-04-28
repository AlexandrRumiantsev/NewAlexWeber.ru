import React, {
  Component
} from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';

import '../styles/body/projects/list.scss';
import '../styles/body/projects/item.scss';

function ListProject(props) {
    console.log(props.data);
    return <div className='item'>
              <div className='item__title'>{props.data.name}</div>
              <div className='container-btn'>
                <a target='_blank' href={props.data.link}>Перейти</a>  
                <span onClick={()=>{alert('редактировать')}}>Ред.</span>
                <span onClick={()=>{alert('Удалить')}}>Уд.</span>
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
                      <ListProject data={project}/>
                    </div>
       })}
      </div>
    }else{
      return <div class='loader'></div>
    }
    
  }
}