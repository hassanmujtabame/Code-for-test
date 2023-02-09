
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
        return window.axios.get(`service-provider/user/service-categories?${s}`);
    }
    getFields(id,params={}){
        let s=this.generateQueryUrl({...params,service_category_id:id})
        return window.axios.get(`service-provider/user/service-fields?${s}`);
    }
    add(data){
        return window.axios.post(`service-provider/provider/ready-services`,data);  
    }
    update(id,data){
        data.append('_method','PUT')
        return window.axios.post(`service-provider/provider/ready-services/${id}`,data);  
    }
    delete(id){
        return window.axios.delete(`service-provider/provider/ready-services/${id}`);  
    }
    suspend(id){
        return window.axios.post(`service-provider/provider/ready-services/suspend/${id}`);  
    }
    confirmBooking(data){

        return window.axios.post(`service-provider/user/book-services`,data);  

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
    getRequestsForPurchaseService(params={}){
        let s=this.generateQueryUrl(params)
        /**
         * status :  underway waiting  cancel finished
         */
        return window.axios.get(`service-provider/provider/request-purchase-services?${s}`);
    }
    getRequestForPurchaseService(id){
       
        return window.axios.get(`service-provider/provider/request-purchase-services/${id}`);
    }
    cancelRequestsForPurchaseService(id){
        return window.axios.get(`service-provider/provider/request-purchase-services-cancel/${id}`);
    }
    finisheRequestsForPurchaseService(id){
        return window.axios.get(`service-provider/provider/request-purchase-services-finished/${id}`);
    }
    changePriceOfferForRequestService(data){
        return window.axios.post(`service-provider/provider/modify-transaction-value-service`,data);
    }
    changeDateOfferForRequestService(data){
        return window.axios.post(`service-provider/provider/modify-date-receipt-service`,data);
    }
   /** for galleries a ready service */
   getGalleriesAll(service_id,params){
    let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/ready-services/${service_id}/galleries?${s}`);
    }
    addGalleriesItem(service_id,data){
            return window.axios.post(`service-provider/provider/ready-services/${service_id}/galleries`,data);
    }
    deleteGalleriesItem(service_id,id){
        return window.axios.delete(`service-provider/provider/ready-services/${service_id}/galleries/${id}`);
}
checkoutService (data){
    console.mylog(data);
    return window.axios.post(`service-provider/user/purchase-service-checkout`,data);

}
getMyReadyService(params={}){
    let s=this.generateQueryUrl(params)
    /**
     * paginate = x for change default count per page = 10
     */
    return window.axios.get(`service-provider/provider/my-ready-services?${s}`);
}
}

export default new readyServicesApi();