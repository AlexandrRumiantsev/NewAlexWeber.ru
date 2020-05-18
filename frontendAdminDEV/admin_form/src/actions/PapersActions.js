import { SAVE_PAPER , GET_PAPERS , ERROR_TEXT , UPP_PAPER , DEL_PAPER } from '../constants/Papers'
import axios from 'axios';

import { saveAs } from 'file-saver';
import JSZip from 'jszip';


export function getPapers(components , store) {
   axios.get(GET_PAPERS)
        .then(res => {
            components.setState({papers: res.data , status: true})
            store.dispatch(
                    {
                      type: 'setPapers', 
                      val: res.data
                    }
                )
        })
        .catch(()=>{}); 
}

export function updatePaper(components , store , data) {

   axios.post(UPP_PAPER, {
      data: data
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function  delPaper(id) {

   axios.post(DEL_PAPER, {
      id: id
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function  savePaper(datas){
  
  
  
  

  
   /*reader.onload = function(){
    console.log(reader.result);
    dataFile.push(reader.result)
   
       axios.post(SAVE_PAPER , {
      file:  reader.result,
      www: 'as'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };*/
   
  //const dataMain = datas;
  const dataFile = {};

  const arrBrute = function(data){
      Object.keys(data.val.fileObj).forEach( function(i){


      let reader = new FileReader();
      let nameFile = data.val.fileObj[i].name;
      let typeFile = data.val.fileObj[i].type;
      console.log(data.val.fileObj[i].type);
      reader.onload = function(){
      
      let objFile ={
        'bs64' : reader.result, 
        'name' : nameFile,
        'type' : typeFile
      }

    


       let formData = new FormData();    //formdata object

       
        formData.append('str',  reader.result);
         formData.append('nm',  nameFile);

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        
        axios.post(SAVE_PAPER , formData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });



    }
    reader.readAsDataURL(data.val.fileObj[i]);

    })
  }
    //arrBrute(datas);
 
    let formData = new FormData();    //formdata object

       console.log(datas);
        formData.append('file',  datas.val.fileObj[0]);
        formData.append('nm',  'nameFile');

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        
        axios.post(SAVE_PAPER , formData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
   
  
   


  

  

  
  
  
  
  
}