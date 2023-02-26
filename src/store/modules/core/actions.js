export default {
   setIsMobile ({commit}, payload) { 
        commit('SET_IS_MOBILE',payload)
   },
   setIsTablet ({commit}, payload) { 
      commit('SET_IS_TABLET',payload)
   },
   setIsDesktop ({commit}, payload) { 
      commit('SET_IS_DESKTOP',payload)
   }
  }