const state = {
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
	]
};

const getters = {
	allTodos:  state => state.todos
}

const actions = {

}

const mutations = {

}

export default {
	state,
	getters,
	actions,
	mutations
}