
import BaseApi from "./base-service";
import ads from "./ads";
class NetworkApi extends BaseApi {
    ads = ads
    getSubscribes(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/user-subscriptions?${s}`);
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