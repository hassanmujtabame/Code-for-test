
import BaseApi from "../base-service";
class ServiceProviderApi extends BaseApi {

    getSubscribes(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/user-subscriptions?${s}`);
    }
   
}

export default new ServiceProviderApi();