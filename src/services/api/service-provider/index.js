
import BaseApi from "../base-service";
class ServiceProviderApi extends BaseApi {

    checkoutPackageFree(data){
        return window.axios.post(`service-provider/user-checkout-package-free`,data);
    }
    getSubscribes(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/user-subscriptions?${s}`);
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