import { SET_YEAR } from '../constants/Main'
import axios from 'axios';

export function getProjects(state) {
	console.log('getProjects');
	let projectsData = [];
    
    new Promise( ()=>
        axios.get(`http://alexweber.ru:5000/data`)
            .then(res => {
            	console.log(res.data);
                state.data = res.data;
            }) 
         ).then(() => {
            throw new Error('Где-то произошла ошибка');
        });     
    return state;
  
  }