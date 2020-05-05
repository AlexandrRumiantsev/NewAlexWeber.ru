import { GET_COMMENTS , ERROR_TEXT , DEL_COMMENTS , DEL_COMMENTS_DEV } from '../constants/Comments'
import axios from 'axios';


export function getComments(components , action) {
   axios.get(GET_COMMENTS)
        .then(res => {
            components.setState({comments: res.data , status: true})
        })
        .catch(()=>{}); 
}

export function delComment(id) {
	console.log('delComment');
    //console.log(data['data'].component.setState({comments: '' , status: true}));
    
   	axios.post(DEL_COMMENTS, {
	    id: id
	  })
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
}