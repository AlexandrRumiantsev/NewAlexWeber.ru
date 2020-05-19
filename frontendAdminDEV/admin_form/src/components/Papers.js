import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';
import { getPapers } from '../actions/PapersActions.js';
import { connect } from 'react-redux';
import '../styles/body/papers/list.scss';
import '../styles/body/papers/item.scss';
import * as myModule from '../lib/';
import Icon from '@material-ui/core/Icon';


 class Papers extends Component {
  constructor () {

        super(...arguments);
        
        const { store } = this.props
        this.state = store.getState();
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });

  }
  componentDidMount(){
    const { store } = this.props
    getPapers(this , store)

  }
  componentWillUnmount(){
    //this.state.papers.status = true;
  }
  render() {
  	const { store } = this.props
    //<RecipeReviewCard data={papers}/>

    if(this.state.papers.data){
      console.log(this.state.papers)
      return <div className='container-paper'>
      <div onClick={()=>{
                    store.dispatch(
                          {
                            type: 'index', 
                            val: 'index'
                          }
                      )
                    }}
                    class='item__close'>
                    Х
                    </div>
                    <Icon 
                      className="fa fa-plus-circle" 
                      style={{ color: 'red' }} 
                      onClick={
                        ()=>{
                           myModule.liba.materialUI.paperAddPopap(store)
                        } 
                      }
                    />
                    {console.log(this.state.papers.data)}
       {
          this.state.papers.data.map((papers, index)=> {
                return <section id={papers._id} className='section' key={index}>             
                    { myModule.liba.form.create('EditPapers', papers , store ) }
                </section>
              })}
      </div>
    }else{
      return <div>
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
    <span>PAPEr</span>
    
    </div>
    }
    
  }
}
const mapStateToProps = state => {
  return {
    papers: state.papers
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData:  (state) => {
      dispatch(getTest(state))
    }
  }
}
export default connect( mapStateToProps , mapDispatchToProps)(Papers)




