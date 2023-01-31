
import BaseApi from "../../base-service";
class ServiceProviderApi extends BaseApi{
    //Get all project-categories

    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/my-services?${s}`);
    }
    getItem(id,params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/my-services/${id}?${s}`);
    }
    getRecent(params={},paginate=6){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/orders?paginate=${paginate}${s?'&'+s:''}`);
    } 
    getCategories(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/service-categories?${s}`);
    }
    

}

export default new ServiceProviderApi();