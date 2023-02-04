
import BaseApi from "./base-service";
class ServiceProviderApi extends BaseApi{
    //Get all project-categories
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/projects?${s}`);
    }
    getReadyServicesAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/ready-services?${s}`);
    }
    getReadyServiceItem(id,params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/ready-services/${id}?${s}`);
    }
    getCategories(params={}){
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
    getPackages(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/packages?${s}`);
    }

    getBalance(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/view-balance?${s}`);
    }
    rechargeBalance(data){
        return window.axios.post(`service-provider/user/recharge-balance`,data);

    }
    checkoutPackage(data){
        /*
          type if 0
            paymentBrand
            card_holder
            expiryMonth
            expiryYear
            cvv
            card_number
            package_id

            type if 1
            payment_id
            package_id
        */
        return window.axios.post(`service-provider/user/checkout`,data);
    }
    
}

export default new ServiceProviderApi();