export default {
   addMessage ({commit}, payload) { 
        commit('ADD_MESSAGE',payload)
   },
   addMessages ({commit}, payload) { 
      commit('ADD_MESSAGES',payload)
   },
   setMessages ({commit}, payload) { 
      commit('SET_MESSAGES',payload)
   }
  
  }