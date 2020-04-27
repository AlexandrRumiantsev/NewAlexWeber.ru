import React, {
  Component
} from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';

import '../styles/body/projects/list.scss';
import '../styles/body/projects/item.scss';

import '../styles/body/projects/menu.scss';

function ListProject(props) {
    console.log(props.data);
    return <div>
              <div>{props.data.name}</div>
              <div>{props.data.link}</div>
              <div>{props.data._id}</div>
              <div>{props.data.image}</div>
              <div>{props.data.imageFull}</div>
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
      return <div>
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
        Закрыть
      </div>
      {this.state.data.map((project, index)=> {
            return <li key={index}>
                      <ListProject data={project}/>
                    </li>
       })}
      </div>
    }else{
      return <div class='loader'></div>
    }
    
  }
}