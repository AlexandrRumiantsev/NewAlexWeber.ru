import { GET_PROJECTS , ERROR_TEXT} from '../constants/Projects'
import axios from 'axios';

export function getProjects(state , action , GET_TEST) {
    if(GET_TEST){
        return getData(GET_TEST , state, action)
    }else return getData(GET_PROJECTS , state , action);
}

const getData = (GET , state , action) => {
        
        new Promise( ()=>
        axios.get(GET)
            .then(res => {
                console.log(res.data);
                //state.data = res.data;
                action.data.projectComponent.setState({
                  render: true,
                  data: res.data
                });
            }) 
         ).then(() => {
            throw new Error(ERROR_TEXT);
        }); 
    return state;     
}