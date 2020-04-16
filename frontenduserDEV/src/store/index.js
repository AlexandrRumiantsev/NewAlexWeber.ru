import Vuex from 'vuex';
import Vue from 'vue';

import projects from './modules/projects';
import papers from './modules/papers';

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		projects,
		papers
	}
})



