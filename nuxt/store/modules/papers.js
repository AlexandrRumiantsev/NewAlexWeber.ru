const axios = require('axios');

const state = {
	callback: '',
	papers:[]
};

//  Объект для получения состояний в компоненте
const getters = {
	featuredPapers:  () =>{
		return actions.feathPapers;
	}
}

//  Объект для изменения объекта состояния при использование в action метода commit
const mutations = {
	setPapers: (state , papers) => {
		localStorage.setItem('papers', JSON.stringify(papers));
		state.papers = papers;
	},
	getPapers: (state , papers) => {
		state.papers = papers;
	}
}

//  Объект для получения данных из внешних источников
const actions = {	
		async feathPapers(calback){
			let arrData = JSON.parse(localStorage.getItem('papers'))
			if(arrData){
					mutations.getPapers( state , arrData);
					calback(arrData)
			}else{	
				const response = await axios.get(
					'http://alexweber.ru:5000/data_papers'
				)
				 mutations.setPapers( state , response.data);
				 calback(response.data)
			}
		}	
}



export default {
	state,
	getters,
	actions,
	mutations
}