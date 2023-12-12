
import BaseApi from "../base-service";
import proposals from "./user/proposals";
import readyService from "./provider/ready-service";
import partners from "./partners";
class ServiceProviderApi extends BaseApi {
    proposals = proposals;
    readyService = readyService;
    partners = partners;
    //Get all project-categories
getAll(params={}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`service-provider/provider/projects?${s}`);
}
createProfile(data){
    return window.axios.post(`service-provider/provider/portfolios`,data);
}
getHomeSchedules(params={}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`network/network-schedule?${s}`);
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
    let s= this.generateQueryUrl(params)
    return window.axios.get(`service-provider/user/distinguished-providers?${s}`);
}
getRecentServices(params={}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`service-provider/user/latest-added-services?${s}`);
}
// getPackages(params={}){
//     let s=this.generateQueryUrl(params)
//     return window.axios.get(`service-provider/packages?${s}`);
// }
  getPackages(params={}){
        let s=this.generateQueryUrl(params)
        // return window.axios.get(`incubator/packages?${s}`);
		return window.axios.get(`user/service-provider/system-packages?${s}`);

    }
getBalance(params={}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`service-provider/provider/view-balance?${s}`);
}
rechargeBalance(data){
    return window.axios.post(`service-provider/provider/recharge-balance`,data);

}
getNumbers(params={}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`service-provider/numbers?${s}`);
}
getMyTransaction(params={}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`service-provider/provider/recharge-balance?${s}`);

}
    checkoutPackageFree(data){
        return window.axios.post(`service-provider/user-checkout-package-free`,data);
    }
    getSubscribes(params={}){
        let s=this.generateQueryUrl(params)
        // return window.axios.get(`service-provider/provider/user-subscriptions?${s}`);
		return window.axios.get(
			`user/service-provider/system-packages-subscriptions?${s}`
		);

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