import { GET_PAPERS , ERROR_TEXT} from '../constants/Papers'
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