import { GET_PAPERS , ERROR_TEXT , UPP_PAPER } from '../constants/Papers'
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