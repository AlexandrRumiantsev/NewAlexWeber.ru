import { SAVE_PAPER , GET_PAPERS , ERROR_TEXT , UPP_PAPER , DEL_PAPER } from '../constants/Papers'
import axios from 'axios';


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

export function  savePaper(data){
  
  let config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'X-Requested-With': 'XMLHttpRequest'
    }
  };
  
 


   
  //let formData = new FormData();
  //console.log(data.val.title_form);
 // console.log(data.val.fileObj);
  
  let reader = new FileReader();
  reader.onload = function(){
      
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
  };
  reader.readAsDataURL(data.val.fileObj);
  
  //formData.append('title', data.val.title_form);
  //formData.append('discr', data.val.discr_form);
  //formData.append('file', dataURL.data);

 //console.log(dataURL.data);
  
}