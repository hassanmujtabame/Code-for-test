
import BaseApi from "../../base-service";
class ServiceProviderApi extends BaseApi{
    //Get all project-categories

    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/orders?${s}`);
    }
    getItem(id,params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/my-orders/${id}?${s}`);
    }
    addItem(data){
        return window.axios.post(`service-provider/user/orders`,data);
    }
    updateItem(id,data){
        data.append('_method','PUT')
        return window.axios.post(`service-provider/user/orders/${id}`,data);
    }
    deleteItem(id){
      
        return window.axios.delete(`service-provider/user/my-services/${id}`);
    }
    getRecent(params={},paginate=6){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/orders?paginate=${paginate}${s?'&'+s:''}`);
    } 
    getCategories(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/service-categories?${s}`);
    }
    getFields(id,params){
        let s=this.generateQueryUrl({...params,service_category_id:id})
        return window.axios.get(`service-provider/user/service-fields?${s}`); 
    }
    confirmDelivery(id){
        return window.axios.get(`service-provider/provider/ready-services/project-delivery/${id}`); 
    }

}

export default new ServiceProviderApi();