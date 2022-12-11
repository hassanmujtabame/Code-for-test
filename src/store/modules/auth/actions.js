export default {
 setToken ({commit}, payload) { 
        commit('SET_TOKEN',payload)
     },
     setUser ({commit}, payload) { 
        commit('SET_USER',payload)
     },
     clearToken ({commit}) { 
        commit('CLEAR_TOKEN')
     },
     clearUser ({commit}) { 
        commit('CLEAR_USER')
     }
  }