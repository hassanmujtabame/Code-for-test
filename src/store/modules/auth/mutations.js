export default{
    CLEAR_AUTH(state){
        localStorage.clear();
        state.token = null;
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
        localStorage.removeItem("auth_user");
    },
    SET_TOKEN(state,token){
        state.token =token;
        localStorage.setItem("auth_token", token);
    },
    SET_USER(state,user){
        state.user=user;
        localStorage.setItem("auth_user", JSON.stringify(user));
    }

}