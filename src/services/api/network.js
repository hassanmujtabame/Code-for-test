
import BaseApi from "./base-service";
import ads from "./ads";
import offers from "./offers";
import projects from "./projects";
import models from "./models";
class NetworkApi extends BaseApi {
    ads = ads
    offers = offers
    projects = projects
    models = models
    getSubscribes(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/user-subscriptions?${s}`);
    }
    getHomeSchedules(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/network-schedule?${s}`);
    }
    getPackages(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/packages?${s}`);
    }
    rechargeBalance(data){
        return window.axios.post(`network/recharge-balance`,data);

    }
    getMyTransaction(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/recharge-balance?${s}`);

    }
    async getBalance(){
        try {
            let res = await window.axios.post(`user/me`)
            if(res.data.success){
               let {total_balance,outstanding_balance,available_balance} = res.data.data;
               return {data:{success:true,data:{total_balance,outstanding_balance,available_balance}}}
            }else{
                return res;
            }
         } catch (error) {
            console.mylog('error',error)
            return {success:false,message:'error general'}
         }
    }
    checkoutPackageFree(data){
        return window.axios.post(`network/user-checkout-package-free`,data);
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
        return window.axios.post(`network/user-checkout`,data);
    }
   

}

export default new NetworkApi();