export default {
	setToken({ commit }, payload) {
		commit("SET_TOKEN", payload);
	},
	setUser({ commit }, payload) {
		commit("SET_USER", payload);
	},
	setPartner({ commit }, payload) {
		commit("SET_PARTNER", payload);
	},
	setSubscribeNetwork({ commit }, payload) {
		commit("SET_SUBSCRIBE_NETWORK", payload);
	},
	setSubscribeProvider({ commit }, payload) {
		commit("SET_SUBSCRIBE_PROVIDER", payload);
	},
	setUploadCourses({ commit }, payload) {
		commit("SET_IS_UPLOAD_COURSES", payload);
	},
	clearToken({ commit }) {
		commit("CLEAR_TOKEN");
	},
	clearUser({ commit }) {
		commit("CLEAR_USER");
	},
	clearPartner({ commit }) {
		commit("CLEAR_PARTNER");
	},

};