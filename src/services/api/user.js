
import BaseApi from "./base-service";
class UserApi extends BaseApi {

    me(){
        return window.axios.post(`user/me`);
    }
    statisticsNetwork(){
        return window.axios.get(`user/statistics-network`);
    }
}

export default new UserApi();