
import BaseApi from "../../base-service";
class readyServicesApi extends BaseApi{
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
    suspend(id){
        return window.axios.post(`service-provider/provider/ready-services/suspend/${id}`);  
    }
    notSuspend(id){
        return window.axios.post(`service-provider/provider/ready-services/not-suspend/${id}`);  
    }
    getRateReadyServicesStatistics(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/ready-services-statistics?${s}`);
    }
    getServiceOffersStatistics(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/service-offers-statistics?${s}`);
    }

    getListRates(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/rates?${s}`);
    }
    getRequestForPurchaseService(params={}){
        let s=this.generateQueryUrl(params)
        /**
         * status :  underway waiting  cancel finished
         */
        return window.axios.get(`service-provider/provider/request-purchase-services?${s}`);
    }
    cancelRequestForPurchaseService(id){
        return window.axios.post(`service-provider/provider/request-purchase-services-cancel/${id}`);
    }
    finisheRequestForPurchaseService(id){
        return window.axios.post(`service-provider/provider/request-purchase-services-finished/${id}`);
    }

}

export default new readyServicesApi();