
import BaseApi from "./base-service";
class ServiceProviderApi extends BaseApi{
    //Get all project-categories
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/project-categories?${s}`);
    }

    getBestProvider(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/distinguished-providers?${s}`);
    }
    getRecentServices(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/latest-added-services?${s}`);
    }
    
}

export default new ServiceProviderApi();