const axios = require('axios');

const state = {
	//Тестовые хардкордные значения
	comments:[]
};

//  Объект для получения состояний в компоненте
const getters = {
    allComments:  state => state.comments,
}

//  Объект для получения данных из внешних источников
const actions = {
	async addComments(obj ,data){
		console.log('addComments');
		console.log(data);
		const response = await axios.post(
			'http://alexweber.ru:5000/comment_add',
			data
		)
	},
	async feathComments( {commit} ){
		const response = await axios.get(
			'http://alexweber.ru:5000/get_all_comments'
		)
		commit('setComments' , response.data);
	}
}

//  Объект для изменения объекта состояния при использование в action метода commit
const mutations = {
	setComments: (state , comments) => (state.comments = comments)
}

export default {
	state,
	getters,
	actions,
	mutations
}