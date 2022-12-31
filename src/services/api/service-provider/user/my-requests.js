
import BaseApi from "../../base-service";
class ServiceProviderApi extends BaseApi{
    //Get all project-categories

    getMyRequestAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/my-services?${s}`);
    }
    getItem(id,params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/my-services/${id}?${s}`);
    }
    
    
    
}

export default new ServiceProviderApi();