import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';
import { getPapers } from '../actions/PapersActions.js';
import { connect } from 'react-redux';
import axios from 'axios';

import EditIcon from '@material-ui/icons/Edit';

import '../styles/body/papers/list.scss';
import '../styles/body/papers/item.scss';

import * as myModule from '../lib/';

import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import ReactDOM from 'react-dom';

import SaveIcon from '@material-ui/icons/Save';

import Button from '@material-ui/core/Button';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import {DropzoneArea} from 'material-ui-dropzone'

  function addPaperForm(){
      let template = document.createElement('div');

        
       let closeBtn = `
          <div onClick="
              let elem = this.parentElement.parentElement.parentElement;
              elem.parentNode.removeChild(elem);
          " 
          class='add_paper_form__close'>
              X
          </div>
       `;
       
      

      template.innerHTML = `<section class='add_paper_form'>
            <form>
              `+ closeBtn +`
              <div class='container-title'></div>  
              <div class='container-discr'></div>
              <div class='container-check'></div> 
              <div class='container-link hidden'></div> 
              <div class='container-file hidden'></div> 
              <div class='container-sbm'></div> 
            </form>
      </section>`;
     

      document.body.appendChild(
        template    
      );

      ReactDOM.render(
                <TextField id="filled-basic" 
                  label="Заголовок"
                /> , 
                document.getElementsByClassName('container-title')[0]
              )
      ReactDOM.render(
                <TextField 
                  id="outlined-multiline-static"
                  label="Описание"
                  multiline
                  rows={4}
                  variant="outlined"
                /> , 
                document.getElementsByClassName('container-discr')[0]
              )

      const handleChange = (event) => {
        //console.log(event.currentTarget.name);
      document.getElementsByClassName(
        'container-' + event.currentTarget.name
      )[0].classList.remove("hidden");
      
      if(event.currentTarget.name == 'file'){
        document.getElementsByClassName(
          'container-link'
        )[0].classList.add("hidden");
      }else{
        document.getElementsByClassName(
          'container-file'
        )[0].classList.add("hidden");
      }

      };
      ReactDOM.render(
                 <FormGroup>
                    <FormControlLabel
                      control={<Checkbox  onChange={handleChange} name="file" />}
                      //onClick={()=>{alert('Файл')}}
                      label="Файл"
                    />
                    <FormControlLabel
                      control={<Checkbox  onChange={handleChange} name="link" />}
                      //onClick={()=>{alert('Ссылка')}}
                      label="Ссылка"
                    />
                  </FormGroup> , 
                document.getElementsByClassName('container-check')[0]
              )
        ReactDOM.render(
                <TextField id="link" 
                  label="Ссылка"
                /> 
                 , 
                document.getElementsByClassName('container-link')[0]
              )
         ReactDOM.render(
                  <DropzoneArea
                    id='file'
                    filesLimit={1}
                    useChipsForPreview={true}
                    />, 
                document.getElementsByClassName('container-file')[0]
              )             
       ReactDOM.render(
               <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<SaveIcon />}
                  onClick={ () => {alert('xxx')} }
                >
                Сохранить
              </Button>, 
                document.getElementsByClassName('container-sbm')[0]
              )
      
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
                          addPaperForm()
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




