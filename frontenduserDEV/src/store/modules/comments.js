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
	async addComments(obj ,data ){
		
		let send = function(){
			axios.post('http://alexweber.ru:5000/comment_add',data);
			alert('Комментарий отправлен');
			data.callbak(data);
		}

		const response = await send();
		
	},
	async feathComments( {commit} ){
		const response = await axios.get(
			'http://alexweber.ru:5000/get_all_comments'
		)
		commit('setComments' , response.data);
	},
	refrashComments: function(obj , data){
		let insertData = {
			_id: 9999,
			title: data.comment,
			user: data.name,
			paper: data.paper,
			__v: 999
		}
		obj.state.comments.push(insertData);
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