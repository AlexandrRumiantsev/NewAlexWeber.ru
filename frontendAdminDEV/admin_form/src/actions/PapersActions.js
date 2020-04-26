import { GET_PAPERS , ERROR_TEXT} from '../constants/Papers'
import axios from 'axios';

/*
export function getPapers(state , action , GET_TEST) {
    if(GET_TEST){
        return getData(GET_TEST , state, action)
    }else return getData(GET_PAPERS , state);
}

export function getData(GET , state) {
        
        new Promise( ()=>
        axios.get(GET)
            .then(res => {
                console.log(res.data);
                state.data = res.data;
                state.status = true;
            }) 
         ).then(() => {
            throw new Error(ERROR_TEXT);
        }); 
    return state;     
}
*/

export function getPapers(components) {
   axios.get(GET_PAPERS)
        .then(res => {
            components.setState({papers: res.data , status: true})
        })
        .catch(()=>{}); 
}