import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [createPersistedState()],
	mutations: {
		setError(state, error) {
			state.error = error
		},
		clearError(state) {
			state.error = null
		}
	},
	getters: {
		error: s => s.error
	},
	modules: {
		user,
	},
});