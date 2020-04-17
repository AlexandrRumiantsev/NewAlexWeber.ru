const axios = require('axios');

const state = {
	//Тестовые хардкордные значения
	todos:[
		{
			id:1,
			title:'тест 1'
		},
		{
			id:2,
			title:'тест 2'
		},
		{
			id:3,
			title:'тест 3'
		}
	],
	projects:[]
};

//  Объект для получения состояний в компоненте
const getters = {
	allTodos:  state => state.todos,
	allProjects:  state => state.projects,
}

//  Объект для получения данных из внешних источников
const actions = {
	async feathProjects( {commit} ){
		const response = await axios.get(
			'http://alexweber.ru:5000/data'
		)
		commit('setProjects' , response.data);
	}
}

//  Объект для изменения объекта состояния при использование в action метода commit
const mutations = {
	setProjects: (state , projects) => (state.projects = projects)
}

export default {
	state,
	getters,
	actions,
	mutations
}