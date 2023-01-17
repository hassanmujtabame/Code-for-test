
import BaseApi from "./base-service";
class NetworkApi extends BaseApi {

    getSubscribes(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/user-subscriptions?${s}`);
    }
    getPackages(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/packages?${s}`);
    }
}

export default new NetworkApi();