import Vue from 'vue'
import Vuex from 'vuex'
import module_auth from './modules/auth'
import module_core from './modules/core'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth:module_auth,
    core:module_core
  }
});
window.store = store;
export default store;