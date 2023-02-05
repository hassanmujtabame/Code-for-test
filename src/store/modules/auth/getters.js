export default {
    
    token (state) {
    return state.token || localStorage.getItem('auth_token')
    },
    user (state,a,b,c) {
        console.mylog('dd',a,b,c)
        return state.user || JSON.parse(localStorage.getItem('auth_user'));
    },
    partner (state) { 
        return state.partner;
    },
    isProvider (state,getters) { 
        let data = localStorage.getItem('user_provider')=='Y';
        console.mylog('load pr',data,getters)
        if(data)
        data = data && !!getters.subscribeProvider
        return data;
    },
    subscribeNetwork (state) { 
        return state.subscribeNetwork;
    },
    subscribeProvider (state) { 
        return state.subscribeProvider;
    },
    authenticated(state){
        return !!state.user || !!localStorage.getItem('auth_user')
    }
  }