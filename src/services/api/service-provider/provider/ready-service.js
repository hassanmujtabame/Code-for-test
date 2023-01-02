
import BaseApi from "../../base-service";
class ServiceProviderApi extends BaseApi{
    //Get all project-categories

    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/ready-services?${s}`);
    }
    getItem(id,params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/ready-services/${id}?${s}`);
    }
    setAsView(id,params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.post(`service-provider/provider/ready-services/${id}/view?${s}`);
  
    }
    getCategories(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/project-categories?${s}`);
    }
    add(data){
        return window.axios.post(`service-provider/provider/ready-services`,data);  
    }
    update(id,data){
        return window.axios.put(`service-provider/provider/ready-services/${id}`,data);  
    }
    delete(id){
        return window.axios.delete(`service-provider/provider/ready-services/${id}`);  
    }
    
}

export default new ServiceProviderApi();