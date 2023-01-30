
import BaseApi from "./base-service";
class NetworkApi extends BaseApi {

    getSubscribes(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/user-subscriptions?${s}`);
    }
    getPackages(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/packages?${s}`);
    }
    chechoutPackage(data){
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
        return window.axios.get(`network/user-checkout`,data);
    }
   

}

export default new NetworkApi();