export default{
    CLEAR_AUTH(state){
        localStorage.clear();
        state.token = null;
        state.partner = null;
        state.isProvider= false;
        state.academyRole = null;
        state.subscribeNetwork=null;
        state.subscribeProvider=null;
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user_provider");
        localStorage.removeItem("user_academy_role");
        state.user = null;
        localStorage.removeItem("auth_user");
        
        if(window.router){
            window.router.push('/login');   
        }
    },
    CLEAR_TOKEN(state){
        state.token = null;
        localStorage.removeItem("auth_token");
    },
    CLEAR_USER(state){
        state.user = null;
        state.partner = null;
        state.subscribeNetwork=null;
        state.subscribeProvider=null;
        state.academyRole = null;
        localStorage.removeItem("auth_user");
        localStorage.removeItem("user_provider");
        localStorage.removeItem("user_academy_role");
    },
    CLEAR_PARTNER(state){
        state.partner = null;
    },
    SET_TOKEN(state,token){
        state.token =token;
        localStorage.setItem("auth_token", token);
    },
    SET_ACADEMY_ROLE(state,payload){
        state.academyRole =payload;
        localStorage.setItem("user_academy_role", payload);
    },
    SET_IS_PROVIDER(state,payload){
        let data =payload;
       console.mylog('SET_IS_PROVIDER',state,!!data,state.subscribeProvider)
        if(data)
        data= (!!data && !!state.subscribeProvider)
        //console.mylog('SET_IS_PROVIDER',data)
        localStorage.setItem("user_provider", data?'Y':'N');
    },
    SET_USER(state,payload){
        let {partner,subscribers,...user} = payload;
        state.user=user;
        state.partner = partner?? null; // if undefined makes it null
        state.subscribeNetwork = subscribers&&subscribers.network?subscribers.network.subscribe:null
        state.subscribeProvider = subscribers&&subscribers.service_provider?!!subscribers.service_provider.subscribe:null
        localStorage.setItem("auth_user", JSON.stringify(user));
        localStorage.setItem("user_academy_role","student");
        state.academyRole = "student"
    },
    SET_PARTNER(state,payload){
        state.partner=payload;
        
    },
    SET_SUBSCRIBE_NETWORK(state,payload){
        state.subscribeNetwork=payload;
        
    },
    SET_SUBSCRIBE_PROVIDER(state,payload){
        state.subscribeProvider=payload;
        
    }

}