export default {
    
    token (state) {
    return state.token || localStorage.getItem('auth_token')
    },
    user (state/*,a,b,c*/) {
        //console.mylog('dd',a,b,c)
        return state.user || JSON.parse(localStorage.getItem('auth_user'));
    },
    partner (state) { 
        return state.partner;
    },
    isInstructor (state) { 
        return state.isInstructor;
    },
    academyRole(state){
       return state.academyRole || localStorage.getItem('user_academy_role') || 'student'
    },
    isProvider (state,getters,...args) { 
        console.mylog('sqsd',args)
        let data = localStorage.getItem('user_provider')=='Y';
        //console.mylog('load pr',data,getters)
        if(data)
        data = data && !!getters.subscribeProvider
        state.isProvider = data
        return state.isProvider;
    },
    subscribeNetwork (state) { 
        return state.subscribeNetwork;
    },
    subscribeProvider (state) { 
        return state.subscribeProvider;
    },
    subscribeAcademy (state) { 
        return state.subscribeAcademy;
    },
    subscribeIncubator (state) { 
        return state.subscribeIncubator;
    },
    isSubscribeNetwork (state) { 
        return state.isSubscribeNetwork;
    },
    isSubscribeProvider (state) { 
        return state.isSubscribeProvider;
    },
    isSubscribeAcademy (state) { 
        return state.isSubscribeAcademy;
    },
    isSubscribeIncubator (state) { 
        return state.isSubscribeIncubator;
    },
    authenticated(state){
        return !!state.user || !!localStorage.getItem('auth_user')
    }
  }