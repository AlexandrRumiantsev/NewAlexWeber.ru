import { GET_COMMENTS , ERROR_TEXT} from '../constants/Comments'
import axios from 'axios';


export function getComments(components) {
	console.log('GET_COMMENTS');
   axios.get(GET_COMMENTS)
        .then(res => {
            components.setState({comments: res.data , status: true})
        })
        .catch(()=>{}); 
}