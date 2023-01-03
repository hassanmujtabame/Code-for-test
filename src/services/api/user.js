
import BaseApi from "./base-service";
class UserApi extends BaseApi {

    me(){
        return window.axios.post(`user/me`);
    }
   
}

export default new UserApi();