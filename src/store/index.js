import Vue from 'vue'
import Vuex from 'vuex'
import module_auth from './modules/auth'
import module_core from './modules/core'
import module_chat from './modules/chat'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isProviderRole: false,
    clientOrProvider: '',
    serviceProviderWorkspaceSelected_id: '',
    book: false
  },
  mutations: {
    serviceProviderWorkspaceSelected(state, payload){
      state.serviceProviderWorkspaceSelected_id = payload
    },
    showBook(state){
      state.book = true
    },
    hideBook(state){
      state.book = false
    },
    changeRole(state, payload){
      if(!payload || payload == '' || payload == {}  ){
        if (state.isProviderRole == false) {
          state.isProviderRole = true
          state.clientOrProvider = 'client'
        } else if (state.isProviderRole == true){
          state.isProviderRole = false
          state.clientOrProvider = 'provider'
        }
      } 
      else {
        if(payload.selected == 'client'){
          state.isProviderRole = false
          state.clientOrProvider = 'client'
        }
        else if(payload.selected == 'provider'){
          state.isProviderRole = true
          state.clientOrProvider = 'provider'
        }
        return state.isProviderRole
      }
    }
  },
  actions: {
  },
  modules: {
    auth:module_auth,
    core:module_core,
    chat:module_chat
  }
});
window.store = store;
export default store;