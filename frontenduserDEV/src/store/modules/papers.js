const axios = require('axios');

const state = {
	papers:[]
};

//  Объект для получения состояний в компоненте
const getters = {
	allPapers:  state => state.papers,
}

//  Объект для получения данных из внешних источников
const actions = {
	async feathPapers( {commit} ){
		const response = await axios.get(
			'http://alexweber.ru:5000/data_papers'
		)
		commit('setPapers' , response.data);
	}
}

//  Объект для изменения объекта состояния при использование в action метода commit
const mutations = {
	setPapers: (state , papers) => (state.papers = papers)
}

export default {
	state,
	getters,
	actions,
	mutations
}