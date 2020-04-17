import Vuex from 'vuex';
import Vue from 'vue';

import projects from './modules/projects';
import papers from './modules/papers';
import comments from './modules/comments';

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		projects,
		papers,
		comments
	}
})



