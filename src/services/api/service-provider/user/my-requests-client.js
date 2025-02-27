
import BaseApi from "../../base-service";
class ServiceProviderApi extends BaseApi{
    //Get all project-categories

    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/my-orders?${s}`);
    }
    getItem(id,params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/orders/${id}?${s}`);
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
        return window.axios.post(`service-provider/user/my-order/delivery/${id}`); 
    }
    getOffersAll(id,params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/my-orders/${id}?${s}`);
    }
    acceptOffer(id){
        /** id of Offer for this request */
        return window.axios.post(`service-provider/user/my-order/accept/${id}`);

    }
    refuseOffer(id){
        /** id of Offer for this request */
        return window.axios.post(`service-provider/user/my-order/refuse/${id}`);

    }
    rateProvider(data){
        return window.axios.post(`service-provider/user/rate`,data);
    }
    rateService(data){
        return window.axios.post(`service-provider/user/rate/request-service`,data);
    }
}

export default new ServiceProviderApi();