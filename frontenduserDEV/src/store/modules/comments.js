const axios = require('axios');

const state = {
	//Тестовые хардкордные значения
	comments:[
		{
			id:1,
			time: '10.08.20: 13:40',
			user:'Виталий',
			title:'Первый комментарий',
			paper: 'Шпаргалка по работе с MONGO в консоли'
		},
		{
			id:2,
			time: '12.08.20: 13:40',
			user:'Евгений',
			title:'Привет, Привет',
			paper: 'Шпаргалка по работе с MONGO в консоли'
		},
		{
			id:3,
			time: '20.08.20: 13:40',
			user:'Константин',
			title:'Hello world',
			paper: 'Docker + Node + Mongo'
		}
	]
};

//  Объект для получения состояний в компоненте
const getters = {
	allComments:  state => state.comments
}

//  Объект для получения данных из внешних источников
const actions = {
	/*
	async feathProjects( {commit} ){
		const response = await axios.get(
			'http://alexweber.ru:5000/data'
		)
		commit('setProjects' , response.data);
	}
	*/
}

//  Объект для изменения объекта состояния при использование в action метода commit
const mutations = {
	//setProjects: (state , projects) => (state.projects = projects)
}

export default {
	state,
	getters,
	actions,
	mutations
}