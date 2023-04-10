import BaseApi from "../../base-service";
class ProposalsApi extends BaseApi{
    //Get all project-categories

    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/proposals?${s}`);
    }
    getMine(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/my-proposals?${s}`);
    }
    getItem(id,params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/my-proposals/${id}?${s}`);
    }
    addItem(data){
        return window.axios.post(`service-provider/user/my-proposals`,data);
    }
    updateItem(id,data){
        data.append('_method','PUT')
        return window.axios.post(`service-provider/user/my-proposals/${id}`,data);
    }
    deleteItem(id){
      
        return window.axios.delete(`service-provider/user/my-proposals/${id}`);
    }
    getRecent(params={},paginate=6){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/proposals?paginate=${paginate}${s?'&'+s:''}`);
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
}
export default new ProposalsApi();
