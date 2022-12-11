export default {
    
    token (state) {
    return state.token || localStorage.getItem('auth_token')
    },
       user (state) { 
        return state.user || JSON.parse(localStorage.getItem('auth_user'));
    },
    authenticated(state){
        return !!state.user || !!localStorage.getItem('auth_user')
    }
  }