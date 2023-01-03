
import BaseApi from "./base-service";
class UserApi extends BaseApi {

    me(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`user/me?${s}`);
    }
   
}

export default new UserApi();