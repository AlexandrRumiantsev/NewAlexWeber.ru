import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';
import { getPapers } from '../actions/PapersActions.js';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button'


import '../styles/body/papers/list.scss';
import '../styles/body/papers/item.scss';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" 
        defaultValue={props.data.title} 
        label="Standard" 
      />
      <TextField id="filled-basic" 
        defaultValue={props.data.link} 
        label="Filled" 
        variant="filled" 
      />
      <TextField 
        id="outlined-basic" 
        defaultValue={props.data.discription} 
        label="Outlined" 
        variant="outlined" 
      />
    </form>
  );
}


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
    
    if(this.state.papers.data){
      console.log(this.state.papers)
      return <div>
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
                   
                    {console.log(this.state.papers.data)}
       {
          this.state.papers.data.map((papers, index)=> {
                return <section key={index}>
                  <div>title is: {papers.title}</div>
                  <div>img is: {papers.img}</div>
                  <div>link is: {papers.link}</div>
                  <div>discription is: {papers.discription}</div>
                  <div>Mugger ID is: {papers._id}</div>
                   <Button variant="contained" color="primary">
                     edit
                    </Button>
                    <BasicTextFields data={papers}/>
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




