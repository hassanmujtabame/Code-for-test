import Vue from 'vue'
import Vuex from 'vuex'
import module_auth from './modules/auth'
import module_core from './modules/core'
import module_chat from './modules/chat'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isProviderRole: false

  },
  mutations: {
    changeRole(state, payload = {}){
      if(payload == {} ){
        state.isProviderRole = !state.isProviderRole
        return state.isProviderRole
      } 
      else {
        payload.selected == 'client' ? state.isProviderRole == false : state.isProviderRole == true
        if(payload.selected == 'client'){
          state.isProviderRole = false
        }
        else if(payload.selected == 'service-provider'){
          state.isProviderRole = true
        }
        console.log('provider', state.isProviderRole)
        console.log('provider', payload.selected)
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