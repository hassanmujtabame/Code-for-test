export default{
    CLEAR_AUTH(state){
        localStorage.clear();
        state.token = null;
        state.partner = null;
        localStorage.removeItem("auth_token");
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
        localStorage.removeItem("auth_user");
    },
    CLEAR_PARTNER(state){
        state.partner = null;
    },
    SET_TOKEN(state,token){
        state.token =token;
        localStorage.setItem("auth_token", token);
    },
    SET_USER(state,payload){
        let {partner,subscribes,...user} = payload;
        state.user=user;
        state.partner = partner?? null; // if undefined makes it null
        state.subscribeNetwork = subscribes&&subscribes.network?subscribes.network:null
        state.subscribeProvider = subscribes&&subscribes.service_provider?subscribes.service_provider:null
        localStorage.setItem("auth_user", JSON.stringify(user));
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