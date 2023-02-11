
import BaseApi from "../../base-service";
class RequestPurchasesApi extends BaseApi{
    //Get all project-categories
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        /**
         * status :  underway waiting  cancel finished
         */
        return window.axios.get(`service-provider/provider/request-purchase-services?${s}`);
    }
    getItem(id,params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/request-purchase-services/${id}?${s}`);
    }
    addItem(data){
        return window.axios.post(`service-provider/provider/request-purchase-services`,data);
    }
    updateItem(id,data){
        data.append('_method','PUT')
        return window.axios.post(`service-provider/provider/request-purchase-services/${id}`,data);
    }
    deleteItem(id){
      
        return window.axios.delete(`service-provider/provider/request-purchase-services/${id}`);
    }
    getRecent(params={},paginate=6){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/request-purchase-services?paginate=${paginate}${s?'&'+s:''}`);
    } 
   
    confirmDelivery(id){
        return window.axios.get(`service-provider/provider/ready-services/project-delivery/${id}`); 
    }
    acceptRequestPurchase(purchase_id){
        return window.axios.post(`service-provider/provider/request-purchase-service/accept/${purchase_id}`); 
        //return window.axios.get(`service-provider/provider/ready-services/accept/${id}`); 

    }
    finishedRequestPurchase(purchase_id){
        return window.axios.post(`service-provider/provider/request-purchase-service/finished/${purchase_id}`); 
    }
    cancelRequestPurchase(purchase_id){
        return window.axios.post(`service-provider/provider/request-purchase-service/cancel/${purchase_id}`); 
    }
    rateProvider(data){
        return window.axios.post(`service-provider/user/rate`,data);
    }
    rateService(data){
        return window.axios.post(`service-provider/user/rate/ready-service`,data);
    }
}

export default new RequestPurchasesApi();