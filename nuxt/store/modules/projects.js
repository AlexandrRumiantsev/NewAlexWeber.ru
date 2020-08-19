const axios = require('axios');

const state = {
	projects: []
};

//  Объект для получения состояний в компоненте
const getters = {
	featuredProjects:  () =>{
		return actions.feathProjects;
	}
}

//  Объект для изменения объекта состояния при использование в action метода commit
const mutations = {
	setProjects: (state , projects) => {
		localStorage.setItem('projects', JSON.stringify(projects));
		state.projects = projects;
	},
	getProjects: (state , projects) => {
		state.projects = projects;
	}
}


//  Объект для получения данных из внешних источников
const actions = {
	async feathProjects(){
		let arrData = JSON.parse(localStorage.getItem('projects'))
		if(arrData){
			mutations.getProjects( state , arrData)
		}else{
			console.log('Запрос');
			const response = await axios.get(
			'http://alexweber.ru:5000/data'
			)
			console.log(response.data);
			mutations.setProjects( state , response.data)
		}
	}
}





export default {
	state,
	getters,
	actions,
	mutations
}