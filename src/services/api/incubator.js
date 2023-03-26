
import BaseApi from "./base-service";
class IncubatorApi extends BaseApi{
 
    getPackages(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/packages?${s}`);
    }
    checkoutPackage(data){
        return window.axios.post(`incubator/user-checkout`,data);
    }
}

export default new IncubatorApi();