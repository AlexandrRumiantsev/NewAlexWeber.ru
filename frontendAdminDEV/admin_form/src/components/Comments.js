import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';
import { connect } from 'react-redux';
import { delComment , getComments } from '../actions/CommentsActions.js';
import '../styles/body/comments/list.scss';
import '../styles/body/comments/item.scss';

function ItemComment(props){
         return <div className='item-comment'>
            <span onClick={()=>{
                  let sign = confirm("Удалить?");
                  if(sign)
                    delComment(props.data._id , props.components , props.store);
                }}>
                  <i class="fas fa-trash-alt"></i>
            </span>
           <div className='item-comment__title'>
              title is: {props.data.title}
           </div>
           <div className='item-comment__paper'>
              paper is: {props.data.paper}
           </div>
           <div className='item-comment__user'>
              user is: {props.data.user}
           </div>
         </div>                  
}

class Comments extends Component {
	constructor () {
        super(...arguments);
        /* 
          алгоритм необходимы для обновления компонента, 
          посли изменения состояния хранилища 
        */
        this.delComment = React.createRef();
        const { store } = this.props
        this.state = store.getState();
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });

  }
  componentDidMount(){
    const { store } = this.props;
    
    getComments(this , store)

  }
  render() {
  	const { store } = this.props
    console.log(store.getState().comments.data)
    if(this.state.status == true){
      return  <div className='page-comment'>
      <div onClick={()=>{
                    store.dispatch(
                          {
                            type: 'index', 
                            val: 'index'
                          }
                      )
                    }}
                    class='item__close'>
                    X
                    </div>
                    { store.getState().comments.data.map((comments, index)=> {
                      return <section id={comments._id} className='comment-list-item' key={comments._id}>
                          <ItemComment components={this} store={store}  data={comments} />
                       </section>
                    })}
              </div>
            
    }else{
      return <h1>
    <div class='index-container'>
                    <div onClick={()=>{
                    store.dispatch(
                          {
                            type: 'index', 
                            val: 'index'
                          }
                      )
                    }}
                    class='index-container__item'>
                    Закрыть
                    </div>
              </div>
    <span>COMMENTS</span>

    

    </h1>
    }
    
  }
}


const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData:  (state) => {
      dispatch(getComments(state))
    }
  }
}
export default connect( mapStateToProps , mapDispatchToProps)(Comments)