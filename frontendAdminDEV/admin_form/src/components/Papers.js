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

import {DropzoneArea} from 'material-ui-dropzone'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

  function addPaperForm(store){
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
            <form id='add_paper'>
              `+ closeBtn +`
              <div class='container-title'></div>  
              <div class='container-discr'></div>
              <div class='container-check'></div> 
             <div class='container-file'></div> 
              <div class='container-sbm'></div> 
            </form>
      </section>`;
     

      document.body.appendChild(
        template    
      );

      ReactDOM.render(
                <TextField id="title_form" 
                  label="Заголовок"
                /> , 
                document.getElementsByClassName('container-title')[0]
              )
      ReactDOM.render(
                <TextField 
                  id="discr_form"
                  label="Описание"
                  multiline
                  rows={4}
                  variant="outlined"
                /> , 
                document.getElementsByClassName('container-discr')[0]
              )

      
      const handleChangePath  = (event) => {
          console.log(event.target);
          ReactDOM.render(
            <TextField id="link" 
                    label="Ссылка"
                  /> ,
          document.getElementsByClassName('container-file')[0]
          )
      }
      const handleChangeLoad  = (event) => {
          console.log(event.target);
          ReactDOM.render(
          <DropzoneArea
                    id='file'
                    filesLimit={1}
                    useChipsForPreview={true}
                    />,
          document.getElementsByClassName('container-file')[0]
          )          
      }
      ReactDOM.render(
                <FormControl component="fieldset">
                  <FormLabel component="legend">Способ загрузки</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1">
                    <FormControlLabel 
                      value="path" 
                      control={<Radio />} 
                      label="Путь к файлу" 
                      onChange={handleChangePath}
                    />
                    <FormControlLabel 
                      value="load" 
                      control={<Radio />} 
                      label="Загрузить файл"
                      onChange={handleChangeLoad} 
                    />
                  </RadioGroup>
                </FormControl> , 
                document.getElementsByClassName('container-check')[0]
              )
        
                  
      function base64toBlob(base64Data, contentType) {
          console.log(base64Data);
          contentType = contentType || '';
          var sliceSize = 1024;
          var byteCharacters = atob(base64Data);
          var bytesLength = byteCharacters.length;
          var slicesCount = Math.ceil(bytesLength / sliceSize);
          var byteArrays = new Array(slicesCount);

          for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);

            var bytes = new Array(end - begin);
            for (var offset = begin, i = 0 ; offset < end; ++i, ++offset) {
              bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
          }
          return new Blob(byteArrays, { type: contentType });
      }  

       ReactDOM.render(
               <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<SaveIcon />}
                  onClick={ 
                    () => {
                      let arr = document.forms.add_paper.querySelectorAll(
                        'input[type="text"] , input[type="file"] , textarea'
                      )
                      let data = {}
                      Object.keys(arr).forEach( function(i){
                        if(arr[i].id == ''){
                          
                          const reader = new FileReader();
                          reader.onload = function(e) {    
                               var binaryData = e.target.result;
                               data.binary = binaryData;
                               
                            
                                
                          };
                          data.fileObj = arr[i].files[0];
                          //reader.readAsBinaryString(arr[i].files[0]);
                          
                        }else data[arr[i].id]=arr[i].value
                      })
                      store.dispatch(
                          {
                            type: 'savePaper', 
                            val: data
                          }
                      )
                   }
                 }
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
                          addPaperForm(store)
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




